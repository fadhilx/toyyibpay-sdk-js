[toyyibpay-sdk](../README.md) / [Exports](../modules.md) / ToyyibPay

# Class: ToyyibPay

## Implements

- [`IToyyibPay`](../interfaces/IToyyibPay.md)

## Table of contents

### Constructors

- [constructor](ToyyibPay.md#constructor)

### Properties

- [host](ToyyibPay.md#host)
- [http](ToyyibPay.md#http)

### Methods

- [createBill](ToyyibPay.md#createbill)
- [createCategory](ToyyibPay.md#createcategory)
- [getBank](ToyyibPay.md#getbank)
- [getBillTransactions](ToyyibPay.md#getbilltransactions)
- [getCallbackDetail](ToyyibPay.md#getcallbackdetail)
- [getCategoryDetails](ToyyibPay.md#getcategorydetails)
- [getReturnDetail](ToyyibPay.md#getreturndetail)
- [inactiveBill](ToyyibPay.md#inactivebill)
- [verifyCallbackData](ToyyibPay.md#verifycallbackdata)

## Constructors

### constructor

• **new ToyyibPay**(`token?`, `mode?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token?` | `string` | `undefined` |
| `mode` | ``"sandbox"`` \| ``"live"`` | `"sandbox"` |

#### Defined in

[lib.ts:38](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L38)

## Properties

### host

• **host**: ``"https://toyyibpay.com"`` \| ``"https://dev.toyyibpay.com"``

#### Defined in

[lib.ts:34](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L34)

___

### http

• **http**: `AxiosInstance`

#### Defined in

[lib.ts:36](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L36)

## Methods

### createBill

▸ **createBill**(`bill`): `Promise`<[`ICreatedBill`](../interfaces/ICreatedBill.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bill` | [`CreateBillParam`](../interfaces/CreateBillParam.md) |

#### Returns

`Promise`<[`ICreatedBill`](../interfaces/ICreatedBill.md)[]\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[createBill](../interfaces/IToyyibPay.md#createbill)

#### Defined in

[lib.ts:73](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L73)

___

### createCategory

▸ **createCategory**(`category`): `Promise`<[`ICreatedCategory`](../interfaces/ICreatedCategory.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`CreateCategoryParam`](../interfaces/CreateCategoryParam.md) |

#### Returns

`Promise`<[`ICreatedCategory`](../interfaces/ICreatedCategory.md)[]\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[createCategory](../interfaces/IToyyibPay.md#createcategory)

#### Defined in

[lib.ts:69](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L69)

___

### getBank

▸ **getBank**(): `Promise`<[`IBank`](../interfaces/IBank.md)[]\>

#### Returns

`Promise`<[`IBank`](../interfaces/IBank.md)[]\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[getBank](../interfaces/IToyyibPay.md#getbank)

#### Defined in

[lib.ts:94](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L94)

___

### getBillTransactions

▸ **getBillTransactions**(`query`): `Promise`<[`ITransaction`](../interfaces/ITransaction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`GetTransactionParam`](../interfaces/GetTransactionParam.md) |

#### Returns

`Promise`<[`ITransaction`](../interfaces/ITransaction.md)[]\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[getBillTransactions](../interfaces/IToyyibPay.md#getbilltransactions)

#### Defined in

[lib.ts:77](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L77)

___

### getCallbackDetail

▸ **getCallbackDetail**(`callbackData`): `Promise`<`undefined` \| [`ITransaction`](../interfaces/ITransaction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackData` | [`CallbackData`](../interfaces/CallbackData.md) |

#### Returns

`Promise`<`undefined` \| [`ITransaction`](../interfaces/ITransaction.md)[]\>

#### Defined in

[lib.ts:111](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L111)

___

### getCategoryDetails

▸ **getCategoryDetails**(`categoryCode`): `Promise`<[`ICategory`](../interfaces/ICategory.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `categoryCode` | `string` |

#### Returns

`Promise`<[`ICategory`](../interfaces/ICategory.md)[]\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[getCategoryDetails](../interfaces/IToyyibPay.md#getcategorydetails)

#### Defined in

[lib.ts:80](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L80)

___

### getReturnDetail

▸ **getReturnDetail**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReturnData`](../interfaces/ReturnData.md) |

#### Returns

`void`

#### Defined in

[lib.ts:118](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L118)

___

### inactiveBill

▸ **inactiveBill**(`billCode`): `Promise`<[`InactivedBillStatus`](../interfaces/InactivedBillStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billCode` | `string` |

#### Returns

`Promise`<[`InactivedBillStatus`](../interfaces/InactivedBillStatus.md)\>

#### Implementation of

[IToyyibPay](../interfaces/IToyyibPay.md).[inactiveBill](../interfaces/IToyyibPay.md#inactivebill)

#### Defined in

[lib.ts:85](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L85)

___

### verifyCallbackData

▸ **verifyCallbackData**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CallbackData`](../interfaces/CallbackData.md) |

#### Returns

`boolean`

#### Defined in

[lib.ts:107](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L107)
