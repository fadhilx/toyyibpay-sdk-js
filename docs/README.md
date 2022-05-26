toyyibpay-sdk / [Exports](modules.md)

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
for full documentation please look at [`docs`](docs/classes/ToyyibPay.md)
