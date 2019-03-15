// Type definitions for bitmex-realtime-api 0.4.0
// Project: https://github.com/BitMEX/api-connectors/tree/master/official-ws/nodejs
// Definitions by: Eric Crosson <https://github.com/EricCrosson>
// Definitions:

/// <reference types="node" />

import WebSocket from 'ws';
import { EventEmitter2 } from 'eventemitter2';

declare class BitMEXClient extends EventEmitter2 {
    socket: WebSocket;
}

export = BitMEXClient;
