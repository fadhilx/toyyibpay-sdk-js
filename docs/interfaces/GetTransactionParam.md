[toyyibpay-sdk](../README.md) / [Exports](../modules.md) / GetTransactionParam

# Interface: GetTransactionParam

## Table of contents

### Properties

- [billCode](GetTransactionParam.md#billcode)
- [billpaymentStatus](GetTransactionParam.md#billpaymentstatus)

## Properties

### billCode

• **billCode**: `string`

Bill Code of the bill
eg: `td8bfqv7`

#### Defined in

[declarations/toyyib.d.ts:232](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L232)

___

### billpaymentStatus

• `Optional` **billpaymentStatus**: ``"1"`` \| ``"2"`` \| ``"3"`` \| ``"4"`` \| [`BillPaymentStatusEnum`](../enums/BillPaymentStatusEnum.md)

[Optional] Bill Payment Status

1 - Successful transaction

2 - Pending transaction

3 - Unsuccessful transaction

4 - Pending

#### Defined in

[declarations/toyyib.d.ts:244](https://github.com/fadhilx/toyyibpay-sdk-js/blob/ee76517/src/declarations/toyyib.d.ts#L244)
