import anyTest, { TestInterface } from 'ava'

import sinon from 'sinon'
import WebSocket from 'ws'
import BitMEXClient from 'bitmex-realtime-api'
import { EventEmitter2 } from 'eventemitter2'

/**
 * Library under test
 */

import BitmexHeartbeat from '../src/bitmex-heartbeat'


interface TestContext {
    port: number
    server: TestServer
    clock: sinon.SinonFakeTimers
    spy: sinon.SinonSpy
}

const test = anyTest as TestInterface<TestContext>

class TestServer {

    client: WebSocket | undefined
    readonly wss: WebSocket.Server
    readonly pingCallback: Function

    constructor(port: number, pingCallback: Function) {
        this.wss = new WebSocket.Server({
            port: port,
            clientTracking: false
        })
        this.wss.on('connection', this.connectionHandler.bind(this))
        this.pingCallback = pingCallback
    }

    connectionHandler(ws: WebSocket) {
        ws.on('message', this.messageHandler.bind(this, ws))
        this.client = ws
    }

    messageHandler(ws: WebSocket, message: string) {
        if (!message.split(/\s+/).includes('ping')) {
            // console.log('Received unexpected message:', message)
            return
        }
        // console.log('In ping handler')
        // console.log('server ignoring ping')
        // ws.send('pong', this.pingCallback())
    }
}

class TestBitMEXClient extends EventEmitter2 implements BitMEXClient {

    readonly socket: WebSocket
    readonly heartbeat: BitmexHeartbeat

    constructor(port: number) {
        super()
        this.socket = new WebSocket(`ws://localhost:${port}`)
        this.heartbeat = new BitmexHeartbeat(this)

        this.socket.on('open', () => this.emit('open'))
        this.socket.on('message', this.messageHandler.bind(this))
        this.socket.on('error', this.errorHandler.bind(this))
    }

    messageHandler(message: string) {
        if (!message.split(/\s+/).includes('pong')) {
            // console.log('Received message:', message)
            this.emit('message', message)
            return
        }
        // console.log('In pong handler')
        this.errorHandler(message)
    }

    errorHandler(...error: string[]) {
        // console.log('Checking for errors in', ...error)
        if (this.heartbeat.isServerResponse(error)) { return /* no problem here */ }
        // console.log('Error:', ...error)
    }
}


let PORT = 1577
test.beforeEach(t => {
    PORT += 1
    t.context.port = PORT
    t.context.spy = sinon.spy()
    t.context.server = new TestServer(PORT, t.context.spy)
    // t.context.clock = sinon.useFakeTimers()
})

test.afterEach.always(t => {
    // t.context.clock.restore()
})


/*********************************************************************
 * Test cases
 ********************************************************************/

// I'm not sure how to test this one -- the error comes from a non-main thread
// test.cb('heartbeat should throw an error event after 5 seconds of no response from server', t => {
//     const client = new TestBitMEXClient(t.context.port)

//     client.socket.on('open', () => {
//         t.true(t.context.spy.notCalled)
//         setTimeout(() => {
//             setTimeout(() => {
//                 t.end()
//             }, 5001)
//         }, 5000)
//     })
// })

test.todo('heartbeat should throw an error when there are no listeners to the error event')

//  LocalWords:  TestBitMEXClient
