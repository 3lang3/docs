## Hierarchy

- `Error`

  ↳ **`LogtoClientError`**

## Table of contents

### Constructors

- [constructor](LogtoClientError.md#constructor)

### Properties

- [code](LogtoClientError.md#code)
- [data](LogtoClientError.md#data)
- [message](LogtoClientError.md#message)
- [name](LogtoClientError.md#name)
- [stack](LogtoClientError.md#stack)
- [prepareStackTrace](LogtoClientError.md#preparestacktrace)
- [stackTraceLimit](LogtoClientError.md#stacktracelimit)

### Methods

- [captureStackTrace](LogtoClientError.md#capturestacktrace)

## Constructors

### constructor

**new LogtoClientError**(`code`, `data?`)

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `code`  | [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md) |
| `data?` | `unknown`                                                  |

#### Overrides

Error.constructor

#### Defined in

[packages/browser/src/errors.ts:33](https://github.com/logto-io/js/blob/5254dee/packages/browser/src/errors.ts#L33)

## Properties

### code

**code**: [`LogtoClientErrorCode`](../types/LogtoClientErrorCode.md)

#### Defined in

[packages/browser/src/errors.ts:30](https://github.com/logto-io/js/blob/5254dee/packages/browser/src/errors.ts#L30)

---

### data

**data**: `unknown`

#### Defined in

[packages/browser/src/errors.ts:31](https://github.com/logto-io/js/blob/5254dee/packages/browser/src/errors.ts#L31)

---

### message

**message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.5.5/node_modules/typescript/lib/lib.es5.d.ts:1023

---

### name

**name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.5.5/node_modules/typescript/lib/lib.es5.d.ts:1022

---

### stack

`Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.5.5/node_modules/typescript/lib/lib.es5.d.ts:1024

---

### prepareStackTrace

`Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

`Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

`Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@17.0.19/node_modules/@types/node/globals.d.ts:4
