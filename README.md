# ToyyibPay SDK for TS/JS

## Instalation


NPM:
```bash
npm install --save toyyibpay-sdk
```

Yarn:
```bash
yarn add toyyibpay-sdk
```

## Usage

TypeScript:
```typescript

import Toyyib from "toyyibpay-sdk";
import {
  BillChargeToEnum,
  BillPaymentChannelEnum,
  BillPayorInfoEnum,
  PriceSettingEnum,
} from "toyyibpay-sdk";

const toyyib = Toyyib("secret", "sandbox"); // change 'sandbox' to 'live' for
toyyib.createBill({
    billName: "My Shop Payment",
    billDescription: "Payment For My Shop",
    billContentEmail: "Thank you beli lagi",
    categoryCode: "ujrth5ds",
    billPaymentChannel: BillPaymentChannelEnum.BOTH,
    billPayorInfo: BillPayorInfoEnum.NOT_REQUIRED,
    billChargeToCustomer: BillChargeToEnum.BOTH_TO_OWNER,
    billPriceSetting: PriceSettingEnum.FIXED,
    billReturnUrl: "http://localhost:1201/api/return",
    billCallbackUrl: "http://localhost:1201/api/callback",
    billAmount: 5 * 100, // for RM5
    billExpiryDays: 1,
    billExternalReferenceNo: "123456",
    billPhone: "12345",
    billEmail: "user@example.com",
    billTo: "Aiman Zalani",
});
```

## Documentation
for full documentation please look at [`docs`](docs/modules.md)


___

### getBank

▸ **getBank**(): `Promise`<[`IBank`](docs/interfaces/IBank.md)[]\>

#### Returns

`Promise`<[`IBank`](docs/interfaces/IBank.md)[]\>

#### Implementation of

[IToyyibPay](docs/interfaces/IToyyibPay.md).[getBank](docs/interfaces/IToyyibPay.md#getbank)

#### Defined in

[lib.ts:94](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L94)

___

### getBillTransactions

▸ **getBillTransactions**(`query`): `Promise`<[`ITransaction`](docs/interfaces/ITransaction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`GetTransactionParam`](docs/interfaces/GetTransactionParam.md) |

#### Returns

`Promise`<[`ITransaction`](docs/interfaces/ITransaction.md)[]\>

#### Implementation of

[IToyyibPay](docs/interfaces/IToyyibPay.md).[getBillTransactions](docs/interfaces/IToyyibPay.md#getbilltransactions)

#### Defined in

[lib.ts:77](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L77)

___

### getCallbackDetail

▸ **getCallbackDetail**(`callbackData`): `Promise`<`undefined` \| [`ITransaction`](docs/interfaces/ITransaction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackData` | [`CallbackData`](docs/interfaces/CallbackData.md) |

#### Returns

`Promise`<`undefined` \| [`ITransaction`](docs/interfaces/ITransaction.md)[]\>

#### Defined in

[lib.ts:111](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L111)

___

### getCategoryDetails

▸ **getCategoryDetails**(`categoryCode`): `Promise`<[`ICategory`](docs/interfaces/ICategory.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `categoryCode` | `string` |

#### Returns

`Promise`<[`ICategory`](docs/interfaces/ICategory.md)[]\>

#### Implementation of

[IToyyibPay](docs/interfaces/IToyyibPay.md).[getCategoryDetails](docs/interfaces/IToyyibPay.md#getcategorydetails)

#### Defined in

[lib.ts:80](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L80)

___

### getReturnDetail

▸ **getReturnDetail**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReturnData`](docs/interfaces/ReturnData.md) |

#### Returns

`void`

#### Defined in

[lib.ts:118](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L118)

___

### hash

▸ `Private` **hash**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CallbackData`](docs/interfaces/CallbackData.md) |

#### Returns

`string`

#### Defined in

[lib.ts:98](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L98)

___

### inactiveBill

▸ **inactiveBill**(`billCode`): `Promise`<[`InactivedBillStatus`](docs/interfaces/InactivedBillStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `billCode` | `string` |

#### Returns

`Promise`<[`InactivedBillStatus`](docs/interfaces/InactivedBillStatus.md)\>

#### Implementation of

[IToyyibPay](docs/interfaces/IToyyibPay.md).[inactiveBill](docs/interfaces/IToyyibPay.md#inactivebill)

#### Defined in

[lib.ts:85](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L85)

___

### verifyCallbackData

▸ **verifyCallbackData**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CallbackData`](docs/interfaces/CallbackData.md) |

#### Returns

`boolean`

#### Defined in

[lib.ts:107](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/lib.ts#L107)
