import ToyyibPay from "./lib";
import { config } from "dotenv";
config();

async function main() {
  const toyyib = new ToyyibPay(process.env.TOKEN ?? "");
  // const createCategory = await toyyib.createCategory(
  //   "test" + Math.round(Math.random() * 10),
  //   "desctest"
  // );
  // console.log("createCategory", createCategory);

  // const createBill = await toyyib.createBill({
  //   billName: "Car Rental WXX123",
  //   billDescription: "Car Rental WXX123 On Sunday",
  //   billPriceSetting: 1,
  //   billPayorInfo: "0",
  //   billAmount: 500,
  //   billReturnUrl: "http://localhost:1201/",
  //   billCallbackUrl: "http://localhost:1201/",
  //   billExternalReferenceNo: "AFR341DFI",
  //   billTo: "John Doe",
  //   billEmail: "jd@gmail.com",
  //   billPaymentChannel: "2",
  //   billPhone: "0194342411",
  //   categoryCode: createCategory[0].CategoryCode,
  //   billChargeToCustomer: "",
  //   billContentEmail: "Thank you for purchasing our product!",
  // }); //vr6ezaog
  // console.log("createBill", createBill);

  // const inactiveBill = await toyyib.inactiveBill(createBill[0].BillCode);
  // console.log("inactiveBill", inactiveBill);

  const getBillTransactions = await toyyib.getBillTransactions("5vhdop7s");
  console.log("getBillTransactions", getBillTransactions);

  const getCategoryDetails = await toyyib.getCategoryDetails("iyd838xv");
  console.log("getCategoryDetails", getCategoryDetails);

  const getBank = await toyyib.getBank();
  console.log("getBank", getBank);
}
main();
