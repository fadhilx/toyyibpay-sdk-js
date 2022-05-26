[toyyibpay-sdk](README.md) / Exports

# toyyibpay-sdk

## Table of contents

### Enumerations

- [BillChargeToEnum](enums/BillChargeToEnum.md)
- [BillPaymentChannelEnum](enums/BillPaymentChannelEnum.md)
- [BillPaymentStatusEnum](enums/BillPaymentStatusEnum.md)
- [BillPayorInfoEnum](enums/BillPayorInfoEnum.md)
- [PriceSettingEnum](enums/PriceSettingEnum.md)

### Classes

- [ToyyibPay](classes/ToyyibPay.md)

### Interfaces

- [CallbackData](interfaces/CallbackData.md)
- [CreateBillParam](interfaces/CreateBillParam.md)
- [CreateCategoryParam](interfaces/CreateCategoryParam.md)
- [GetTransactionParam](interfaces/GetTransactionParam.md)
- [IBank](interfaces/IBank.md)
- [ICategory](interfaces/ICategory.md)
- [ICreatedBill](interfaces/ICreatedBill.md)
- [ICreatedCategory](interfaces/ICreatedCategory.md)
- [IToyyibPay](interfaces/IToyyibPay.md)
- [ITransaction](interfaces/ITransaction.md)
- [InactivedBillStatus](interfaces/InactivedBillStatus.md)
- [ReturnData](interfaces/ReturnData.md)

### Functions

- [default](modules.md#default)
- [jsonToFormData](modules.md#jsontoformdata)

## Functions

### default

▸ **default**(`token?`, `mode?`): [`ToyyibPay`](classes/ToyyibPay.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | `string` | `""` |
| `mode` | ``"sandbox"`` \| ``"live"`` | `"sandbox"` |

#### Returns

[`ToyyibPay`](classes/ToyyibPay.md)

#### Defined in

[lib.ts:121](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L121)

___

### jsonToFormData

▸ **jsonToFormData**(`json`): `FormData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

`FormData`

#### Defined in

[lib.ts:20](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/lib.ts#L20)
