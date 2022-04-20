import ToyyibPay from "./lib";
import { config } from "dotenv";
config();

const toyyib = new ToyyibPay(process.env.TOKEN ?? "");
toyyib.logStatus();
toyyib.createBill({
  categoryCode: "xhrjpf2j",
  billName: "Car Rental WXX123",
  billDescription: "Car Rental WXX123 On Sunday",
  billPriceSetting: 0,
  billPayorInfo: 1,
  billAmount: 100,
  billReturnUrl: "http://localhost:1337//",
  //   billCallbackUrl: "http://bizapp.my/paystatus",
  billExternalReferenceNo: "AFR341DFI",
  billTo: "John Doe",
  billEmail: "jd@gmail.com",
  billPhone: "0194342411",
  billSplitPayment: 0,
  billSplitPaymentArgs: "",
  billPaymentChannel: "0",
  billContentEmail: "Thank you for purchasing our product!",
  billChargeToCustomer: 1,
  billExpiryDate: "17-12-2020 17:00:00",
  billExpiryDays: 3,
});
