# bitmex-heartbeat [![Build status](https://travis-ci.org/strong-roots-capital/bitmex-heartbeat.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitmex-heartbeat) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bitmex-heartbeat.svg)](https://npmjs.org/package/@strong-roots-capital/bitmex-heartbeat) [![codecov](https://codecov.io/gh/strong-roots-capital/bitmex-heartbeat/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bitmex-heartbeat)

> Handles websocket ping/pong with BitMEX

## Install

``` shell
npm install @strong-roots-capital/bitmex-heartbeat
```

## Use

``` typescript
import BitmexHeartbeat from '@strong-roots-capital/bitmex-heartbeat'
import BitMEXClient from 'bitmex-realtime-api'

const bitmexClient = new BitMEXClient()
const heartbeat = new BitmexHeartbeat(bitmexClient)
// Heartbeat begins on 'open' event of bitmexClient

// `heartbeat` emits `error` event if server stops responding, or if
// there are no listeners to the `error` event, an error is thrown instead
heartbeat.on('error', (error: Error) => {
    // try reconnecting
})
```

Important: the BitMEX server only seems to respond to plain-text
`ping`s, but it will respond to the ping as an error. Circumvent this
by ignoring `pong`-related errors in your error handler

``` typescript
errorHandler(...error: string[]) {
    if (this.heartbeat.isServerResponse(error)) { return /* no problem here */ }
    console.log('Error:', ...error)
    process.exit(1)
}
```

## Related

- [bitmex-realtime-api](https://www.npmjs.com/package/bitmex-realtime-api)

## Documentation

- [Heartbeats](https://www.bitmex.com/app/wsAPI#Heartbeats)
