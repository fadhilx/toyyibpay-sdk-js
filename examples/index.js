const { ToyyibPay } = require("toyyibpay-sdk");
async function run() {
  const toyyib = new ToyyibPay("secret", "sandbox"); // change 'sandbox' to 'live' for

  const result = await toyyib.getBank();

  console.log(result[0]); // { id: '1', bank: 'Maybank2U', status: '0' }
}
run();
