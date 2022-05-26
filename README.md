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

```typescript
// const { ToyyibPay } = require("toyyibpay-sdk");
import { ToyyibPay } from "toyyibpay-sdk";

async function run() {
  const toyyib = new ToyyibPay("secret", "sandbox"); // change 'sandbox' to 'live' for

  const result = await toyyib.getBank();

  console.log(result[0]); // { id: '1', bank: 'Maybank2U', status: '0' }
}
run();
```

## Documentation
for method documentation please look at [ToyyibPay](docs/classes/ToyyibPay.md#methods-1)
