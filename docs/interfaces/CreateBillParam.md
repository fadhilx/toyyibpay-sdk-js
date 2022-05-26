[toyyibpay-sdk](../README.md) / [Exports](../modules.md) / CreateBillParam

# Interface: CreateBillParam

Bill serves as an invoice to your customer.

In the example below, we will show you how to create a Bill. You need to pass the following parameters to generate category code. For Content-Type you should use multipart/form-data or x-www-form-urlencoded.

`categoryCode` - Category Code. Get your Category Code from Create Category API

`billName` - Your bill name. Bill Name will be displayed as bill title
* Max 30 alphanumeric characters, space and '_' only

`billDescription`- Your bill description.
* Max 100 alphanumeric characters, space and '_' only

`billPriceSetting` - For fixed amount bill, set it to 1 and insert bill amount. For dynamic bill (user can insert the amount to pay), set it to 0.

`billPayorInfo` - If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1

`billAmount` - Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0

`billReturnUrl` - Key in return Url if you need the bill to be redirected to your own page upon payment completion.

`billCallbackUrl` - Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.

`billExternalReferenceNo` - Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.

`billTo` - If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.

`billEmail` - Provide your customer email here

`billPhone` - Provide your customer phone number here.

`billSplitPayment` - [OPTIONAL] Set 1 if the you need the payment to be splitted to other toyyibPay users.

`billSplitPaymentArgs` - [OPTIONAL] Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]

`billPaymentChannel` - Set 0 for FPX, 1 Credit Card and 2 for both FPX & Credit Card.

`billContentEmail` - [OPTIONAL] Provide additional messages by sending an extra email to your customer. Limited to 1000 characters only.

`billChargeToCustomer` - [OPTIONAL] Below are the values available :
1. Leave blank to set charges for both FPX and Credit Card on bill owner.
2. Set "0" to charge FPX to customer, Credit Card to bill owner.
3. Set "1" to charge FPX bill owner, Credit Card to customer.
4. Set "2" to charge both FPX and Credit Card to customer.

`billExpiryDate` - [OPTIONAL] Date and time to set the bill as inactive (expired). Payer will not be able to make payment after the expiry date. Here is the datetime sample value: "17-12-2020 17:00:00".

`billExpiryDays` - [OPTIONAL] Number of day(s) to allow payment attempt to be made. The bill will be set to inactive after the number of day(s). The default expiry time will be at 23:59:59 on the final day. This parameter is ranged between minimum 1 day to maximum 100 days. The billExpiryDate parameter will be prioritised if both billExpiryDays and billExpiryDate parameters are set.
Our API system will return Bill Code in JSON format. In this example, the API return gcbhict9 as bill code. Hence, your payment url will be:- `toyyibpay.com/gcbhict9`

## Table of contents

### Properties

- [billAmount](CreateBillParam.md#billamount)
- [billCallbackUrl](CreateBillParam.md#billcallbackurl)
- [billChargeToCustomer](CreateBillParam.md#billchargetocustomer)
- [billContentEmail](CreateBillParam.md#billcontentemail)
- [billDescription](CreateBillParam.md#billdescription)
- [billEmail](CreateBillParam.md#billemail)
- [billExpiryDate](CreateBillParam.md#billexpirydate)
- [billExpiryDays](CreateBillParam.md#billexpirydays)
- [billExternalReferenceNo](CreateBillParam.md#billexternalreferenceno)
- [billName](CreateBillParam.md#billname)
- [billPaymentChannel](CreateBillParam.md#billpaymentchannel)
- [billPayorInfo](CreateBillParam.md#billpayorinfo)
- [billPhone](CreateBillParam.md#billphone)
- [billPriceSetting](CreateBillParam.md#billpricesetting)
- [billReturnUrl](CreateBillParam.md#billreturnurl)
- [billSplitPayment](CreateBillParam.md#billsplitpayment)
- [billSplitPaymentArgs](CreateBillParam.md#billsplitpaymentargs)
- [billTo](CreateBillParam.md#billto)
- [categoryCode](CreateBillParam.md#categorycode)

## Properties

### billAmount

• `Optional` **billAmount**: `number`

Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0

#### Defined in

[declarations/toyyib.d.ts:115](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L115)

___

### billCallbackUrl

• `Optional` **billCallbackUrl**: `string`

Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.

#### Defined in

[declarations/toyyib.d.ts:125](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L125)

___

### billChargeToCustomer

• `Optional` **billChargeToCustomer**: ``""`` \| ``"0"`` \| ``"1"`` \| ``"2"`` \| [`BillChargeToEnum`](../enums/BillChargeToEnum.md)

[OPTIONAL] Below are the values available :
1. Leave blank to set charges for both FPX and Credit Card on bill owner.
2. Set "0" to charge FPX to customer, Credit Card to bill owner.
3. Set "1" to charge FPX bill owner, Credit Card to customer.
4. Set "2" to charge both FPX and Credit Card to customer.

#### Defined in

[declarations/toyyib.d.ts:174](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L174)

___

### billContentEmail

• `Optional` **billContentEmail**: `string`

[OPTIONAL] Provide additional messages by sending an extra email to your customer. Limited to 1000 characters only.

#### Defined in

[declarations/toyyib.d.ts:165](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L165)

___

### billDescription

• **billDescription**: `string`

Your bill description.
* Max 100 alphanumeric characters, space and '_' only

#### Defined in

[declarations/toyyib.d.ts:100](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L100)

___

### billEmail

• `Optional` **billEmail**: `string`

Provide your customer email here

#### Defined in

[declarations/toyyib.d.ts:140](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L140)

___

### billExpiryDate

• `Optional` **billExpiryDate**: `string`

[OPTIONAL] Date and time to set the bill as inactive (expired). Payer will not be able to make payment after the expiry date. Here is the datetime sample value: "17-12-2020 17:00:00".

#### Defined in

[declarations/toyyib.d.ts:179](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L179)

___

### billExpiryDays

• `Optional` **billExpiryDays**: `number`

[OPTIONAL] Number of day(s) to allow payment attempt to be made. The bill will be set to inactive after the number of day(s). The default expiry time will be at 23:59:59 on the final

#### Defined in

[declarations/toyyib.d.ts:184](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L184)

___

### billExternalReferenceNo

• `Optional` **billExternalReferenceNo**: `string`

Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.

#### Defined in

[declarations/toyyib.d.ts:130](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L130)

___

### billName

• **billName**: `string`

Your bill name. Bill Name will be displayed as bill title
* Max 30 alphanumeric characters, space and '_' only

#### Defined in

[declarations/toyyib.d.ts:94](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L94)

___

### billPaymentChannel

• **billPaymentChannel**: ``"0"`` \| ``"1"`` \| ``"2"`` \| [`BillPaymentChannelEnum`](../enums/BillPaymentChannelEnum.md)

Set 0 for FPX, 1 Credit Card and 2 for both FPX & Credit Card.

#### Defined in

[declarations/toyyib.d.ts:160](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L160)

___

### billPayorInfo

• **billPayorInfo**: ``"0"`` \| ``"1"`` \| [`BillPayorInfoEnum`](../enums/BillPayorInfoEnum.md)

If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1

#### Defined in

[declarations/toyyib.d.ts:110](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L110)

___

### billPhone

• `Optional` **billPhone**: `string`

Provide your customer phone number here.

#### Defined in

[declarations/toyyib.d.ts:145](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L145)

___

### billPriceSetting

• **billPriceSetting**: ``"0"`` \| ``"1"`` \| [`PriceSettingEnum`](../enums/PriceSettingEnum.md)

For fixed amount bill, set it to 1 and insert bill amount. For dynamic bill (user can insert the amount to pay), set it to 0.

#### Defined in

[declarations/toyyib.d.ts:105](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L105)

___

### billReturnUrl

• `Optional` **billReturnUrl**: `string`

Key in return Url if you need the bill to be redirected to your own page upon payment completion.

#### Defined in

[declarations/toyyib.d.ts:120](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L120)

___

### billSplitPayment

• `Optional` **billSplitPayment**: ``1``

[OPTIONAL] Set 1 if the you need the payment to be splitted to other toyyibPay users.

#### Defined in

[declarations/toyyib.d.ts:150](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L150)

___

### billSplitPaymentArgs

• `Optional` **billSplitPaymentArgs**: `SplitPaymentArgs`[]

[OPTIONAL] Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]

#### Defined in

[declarations/toyyib.d.ts:155](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L155)

___

### billTo

• `Optional` **billTo**: `string`

If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.

#### Defined in

[declarations/toyyib.d.ts:135](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L135)

___

### categoryCode

• **categoryCode**: `string`

Category Code. Get your Category Code from Create Category API

#### Defined in

[declarations/toyyib.d.ts:88](https://github.com/fadhilx/toyyibpay-sdk-js/blob/7872f63/src/declarations/toyyib.d.ts#L88)
