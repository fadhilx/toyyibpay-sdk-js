[toyyibpay-sdk](../README.md) / [Exports](../modules.md) / IToyyibPay

# Interface: IToyyibPay

## Implemented by

- [`ToyyibPay`](../classes/ToyyibPay.md)

## Table of contents

### Methods

- [createBill](IToyyibPay.md#createbill)
- [createCategory](IToyyibPay.md#createcategory)
- [getBank](IToyyibPay.md#getbank)
- [getBillTransactions](IToyyibPay.md#getbilltransactions)
- [getCategoryDetails](IToyyibPay.md#getcategorydetails)
- [inactiveBill](IToyyibPay.md#inactivebill)

## Methods

### createBill

▸ **createBill**(`bill`): `Promise`<[`ICreatedBill`](ICreatedBill.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bill` | [`CreateBillParam`](CreateBillParam.md) |

#### Returns

`Promise`<[`ICreatedBill`](ICreatedBill.md)[]\>

#### Defined in

[declarations/toyyib.d.ts:250](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L250)

___

### createCategory

▸ **createCategory**(`category`): `Promise`<[`ICreatedCategory`](ICreatedCategory.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | [`CreateCategoryParam`](CreateCategoryParam.md) |

#### Returns

`Promise`<[`ICreatedCategory`](ICreatedCategory.md)[]\>

#### Defined in

[declarations/toyyib.d.ts:247](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L247)

___

### getBank

▸ **getBank**(): `Promise`<[`IBank`](IBank.md)[]\>

#### Returns

`Promise`<[`IBank`](IBank.md)[]\>

#### Defined in

[declarations/toyyib.d.ts:254](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L254)

___

### getBillTransactions

▸ **getBillTransactions**(`query`): `Promise`<[`ITransaction`](ITransaction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`GetTransactionParam`](GetTransactionParam.md) |

#### Returns

`Promise`<[`ITransaction`](ITransaction.md)[]\>

#### Defined in

[declarations/toyyib.d.ts:251](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L251)

___

### getCategoryDetails

▸ **getCategoryDetails**(`categoryCode`): `Promise`<[`ICategory`](ICategory.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `categoryCode` | `string` |

#### Returns

`Promise`<[`ICategory`](ICategory.md)[]\>

#### Defined in

[declarations/toyyib.d.ts:252](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L252)

___

### inactiveBill

▸ **inactiveBill**(`billCode`): `Promise`<[`InactivedBillStatus`](InactivedBillStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billCode` | `string` |

#### Returns

`Promise`<[`InactivedBillStatus`](InactivedBillStatus.md)\>

#### Defined in

[declarations/toyyib.d.ts:253](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L253)
