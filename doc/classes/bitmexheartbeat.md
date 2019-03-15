[bitmex-heartbeat](../README.md) > [BitmexHeartbeat](../classes/bitmexheartbeat.md)

# Class: BitmexHeartbeat

Heartbeat timer to keep BitMEX Clients alive.

## Hierarchy

 `EventEmitter`

**↳ BitmexHeartbeat**

## Index

### Constructors

* [constructor](bitmexheartbeat.md#constructor)

### Properties

* [bitmexClient](bitmexheartbeat.md#bitmexclient)
* [killSwitch](bitmexheartbeat.md#killswitch)
* [pingTimer](bitmexheartbeat.md#pingtimer)
* [defaultMaxListeners](bitmexheartbeat.md#defaultmaxlisteners)

### Methods

* [addListener](bitmexheartbeat.md#addlistener)
* [closeHandler](bitmexheartbeat.md#closehandler)
* [emit](bitmexheartbeat.md#emit)
* [eventNames](bitmexheartbeat.md#eventnames)
* [getMaxListeners](bitmexheartbeat.md#getmaxlisteners)
* [handleKillSwitch](bitmexheartbeat.md#handlekillswitch)
* [isServerResponse](bitmexheartbeat.md#isserverresponse)
* [listenerCount](bitmexheartbeat.md#listenercount)
* [listeners](bitmexheartbeat.md#listeners)
* [messageHandler](bitmexheartbeat.md#messagehandler)
* [off](bitmexheartbeat.md#off)
* [on](bitmexheartbeat.md#on)
* [once](bitmexheartbeat.md#once)
* [openHandler](bitmexheartbeat.md#openhandler)
* [pingTimerHandler](bitmexheartbeat.md#pingtimerhandler)
* [prependListener](bitmexheartbeat.md#prependlistener)
* [prependOnceListener](bitmexheartbeat.md#prependoncelistener)
* [rawListeners](bitmexheartbeat.md#rawlisteners)
* [removeAllListeners](bitmexheartbeat.md#removealllisteners)
* [removeListener](bitmexheartbeat.md#removelistener)
* [setMaxListeners](bitmexheartbeat.md#setmaxlisteners)
* [listenerCount](bitmexheartbeat.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BitmexHeartbeat**(client: *`BitMEXClient`*): [BitmexHeartbeat](bitmexheartbeat.md)

*Defined in [bitmex-heartbeat.ts:32](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L32)*

Create a heartbeat around a newly-initialized BitMEXClient.

*__remarks__*: The heartbeat begins after observing client's `on` message, which occurs shortly after object instantiation. Don't let much time elapse between the creation of the client and its heartbeat.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `BitMEXClient` |  BitMEX client to keep alive |

**Returns:** [BitmexHeartbeat](bitmexheartbeat.md)

___

## Properties

<a id="bitmexclient"></a>

###  bitmexClient

**● bitmexClient**: *`BitMEXClient`*

*Defined in [bitmex-heartbeat.ts:30](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L30)*

___
<a id="killswitch"></a>

###  killSwitch

**● killSwitch**: *`Timeout`* =  setTimeout(() => {}, 0)

*Defined in [bitmex-heartbeat.ts:32](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L32)*

___
<a id="pingtimer"></a>

###  pingTimer

**● pingTimer**: *`Timeout`* =  setTimeout(() => {}, 0)

*Defined in [bitmex-heartbeat.ts:31](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L31)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:8*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="closehandler"></a>

###  closeHandler

▸ **closeHandler**(): `void`

*Defined in [bitmex-heartbeat.ts:103](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L103)*

Stop heartbeat-timer.

*__remarks__*: Event handler connected on `this.bitmexClient.on('close')`.

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:23*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:19*

**Returns:** `number`

___
<a id="handlekillswitch"></a>

###  handleKillSwitch

▸ **handleKillSwitch**(): `void`

*Defined in [bitmex-heartbeat.ts:149](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L149)*

Signal that the server has dropped client's connection.

If there are listeners to `this.on('error')`, emit an error event with a `ServerConnectionError`.

If there are no listeners to `this.on('error')`, throw the error instead.

*__remarks__*: Event handler connected on `this.killSwitch`.

**Returns:** `void`

___
<a id="isserverresponse"></a>

###  isServerResponse

▸ **isServerResponse**(error: *`string`[]*): `boolean`

*Defined in [bitmex-heartbeat.ts:127](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L127)*

True if an error from the server is merely a response to a ping.

Important: it is mandatory to implement the following check in your client's code, otherwise every ping will result in an error.

```ts
bitmexClient.on('error', errorHandler)
errorHandler(...error: string[]) {
    if (this.heartbeat.isServerResponse(error)) { return } // no problem here
    // else handle error here/
}
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| error | `string`[] |  Error message sent by BitMEX server |

**Returns:** `boolean`
True if error is not an error but a response to a client ping

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="messagehandler"></a>

###  messageHandler

▸ **messageHandler**(): `void`

*Defined in [bitmex-heartbeat.ts:80](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L80)*

Reset heartbeat-timer thanks to proof-of-life from server.

*__remarks__*: Event handler connected on `this.bitmexClient.on('message')`.

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:12*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="openhandler"></a>

###  openHandler

▸ **openHandler**(): `void`

*Defined in [bitmex-heartbeat.ts:92](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L92)*

Start heartbeat-timer.

*__remarks__*: Event handler connected on `this.bitmexClient.on('open')`.

**Returns:** `void`

___
<a id="pingtimerhandler"></a>

###  pingTimerHandler

▸ **pingTimerHandler**(): `void`

*Defined in [bitmex-heartbeat.ts:60](https://github.com/strong-roots-capital/bitmex-heartbeat/blob/546af58/src/bitmex-heartbeat.ts#L60)*

Ping the server to check its status.

*__remarks__*: Event handler connected on `this.pingTimer`.

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/eric/workspace/strong-roots-capital/bitmex-heartbeat/node_modules/@types/node/events.d.ts:7*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

