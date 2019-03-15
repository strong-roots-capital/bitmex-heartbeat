/**
 * bitmex-heartbeat
 * Handles websocket ping/pong with BitMEX
 */

/**
 * DISCUSS could this be a mix-in? In order to ensure we receive
 * `client.on('open')` event
 *
 * TODO ensure reconnected clients restart heartbeat
 */

import { EventEmitter } from 'events'
import BitMEXClient from 'bitmex-realtime-api'

import { ServerConnectionError } from './server-connection-error'

namespace debug {
    export const heartbeat = require('debug')('bitmex-heartbeat')
    export const timer = require('debug')('bitmex-heartbeat:timer')
}

const datestring = () => new Date(new Date().toUTCString()).toISOString()

/**
 * Heartbeat timer to keep BitMEX Clients alive.
 */
export default class BitmexHeartbeat extends EventEmitter {

    readonly bitmexClient: BitMEXClient
    pingTimer: NodeJS.Timeout = setTimeout(() => {}, 0)
    killSwitch: NodeJS.Timeout = setTimeout(() => {}, 0)

    /**
     * Create a heartbeat around a newly-initialized BitMEXClient.
     *
     * @remarks
     * The heartbeat begins after observing client's `on` message,
     * which occurs shortly after object instantiation. Don't let much
     * time elapse between the creation of the client and its
     * heartbeat.
     *
     * @param client - BitMEX client to keep alive
     */
    constructor(client: BitMEXClient) {
        super()
        this.bitmexClient = client
        this.bitmexClient.on('open', this.openHandler.bind(this))
        this.bitmexClient.on('close', this.closeHandler.bind(this))
        this.bitmexClient.on('message', this.messageHandler.bind(this))
    }


    /**
     * Ping the server to check its status.
     *
     * @remarks
     * Event handler connected on `this.pingTimer`.
     */
    pingTimerHandler() {
        debug.timer(`pingTimer.end ${datestring()}`)
        debug.heartbeat('sending ping')
        this.bitmexClient.socket.send('ping')
        /**
         * Note: using `ws`s built-in ping functionality
         * (`this.bitmexClient.socket.instance.ping(0x00)`) did not
         * keep the session alive at the time this package was
         * created. Documentation/prior art/testing indicates that
         * sending a raw 'ping' string is a suitable alternative
         */
        this.killSwitch = setTimeout(this.handleKillSwitch.bind(this), 5000)
    }

    /**
     * Reset heartbeat-timer thanks to proof-of-life from server.
     *
     * @remarks
     * Event handler connected on `this.bitmexClient.on('message')`.
     */
    messageHandler() {
        debug.heartbeat('received message, resetting timer')
        clearTimeout(this.pingTimer)
        this.pingTimer = setTimeout(this.pingTimerHandler.bind(this), 5000)
    }

    /**
     * Start heartbeat-timer.
     *
     * @remarks
     * Event handler connected on `this.bitmexClient.on('open')`.
     */
    openHandler() {
        clearTimeout(this.pingTimer)
        this.pingTimer = setTimeout(this.pingTimerHandler.bind(this), 5000)
    }

    /**
     * Stop heartbeat-timer.
     *
     * @remarks
     * Event handler connected on `this.bitmexClient.on('close')`.
     */
    closeHandler() {
        clearTimeout(this.pingTimer)
        clearTimeout(this.killSwitch)
    }

    /**
     * True if an error from the server is merely a response to a
     * ping.
     *
     * Important: it is mandatory to implement the following check in
     * your client's code, otherwise every ping will result in an
     * error.
     *
     * ```ts
     * bitmexClient.on('error', errorHandler)
     * errorHandler(...error: string[]) {
     *     if (this.heartbeat.isServerResponse(error)) { return } // no problem here
     *     // else handle error here/
     * }
     * ```
     *
     * @param error - Error message sent by BitMEX server
     * @return True if error is not an error but a response to a client ping
     */
    isServerResponse(error: string[]): boolean {
        const isPong = error.includes('pong')
        if (isPong) {
            debug.heartbeat('received pong')
            clearTimeout(this.killSwitch)
            this.pingTimer = setTimeout(this.pingTimerHandler.bind(this), 5000)
        }
        return isPong
    }

    /**
     * Signal that the server has dropped client's connection.
     *
     * If there are listeners to `this.on('error')`, emit an error
     * event with a `ServerConnectionError`.
     *
     * If there are no listeners to `this.on('error')`, throw the
     * error instead.
     *
     * @remarks
     * Event handler connected on `this.killSwitch`.
     */
    handleKillSwitch() {
        debug.heartbeat('Error: server failed ping/pong')

        const error = new ServerConnectionError('Server failed to respond to ping', this.handleKillSwitch)
        if (this.listeners('error').length > 0) {
            this.emit('error', error)
        } else {
            throw error
        }
    }
}

//  LocalWords:  pingTimer
