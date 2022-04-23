import {
  PriceSettingEnum,
  BillPayorInfoEnum,
  BillPaymentChannelEnum,
  BillChargeToEnum,
  BillPaymentStatusEnum,
} from "./enum";
interface SplitPaymentArgs {
  id: string;
  amount: string;
}
export interface ICreatedBill {
  BillCode: string;
}
export interface InactivedBillStatus {
  status: "success" | "failed";
  result: string;
}
export interface ICategory {
  categoryName: string;
  categoryDescription: string;
  categoryStatus: string | number;
}
export interface ICreatedCategory {
  CategoryCode: string;
}
export interface IBank {
  id: string;
  bank: string;
  status: string;
}
/**
 *
 * Bill serves as an invoice to your customer.
 *
 * In the example below, we will show you how to create a Bill. You need to pass the following parameters to generate category code. For Content-Type you should use multipart/form-data or x-www-form-urlencoded.
 *
 *
 * `categoryCode` - Category Code. Get your Category Code from Create Category API
 *
 * `billName` - Your bill name. Bill Name will be displayed as bill title
 * * Max 30 alphanumeric characters, space and '_' only
 *
 * `billDescription`- Your bill description.
 * * Max 100 alphanumeric characters, space and '_' only
 *
 * `billPriceSetting` - For fixed amount bill, set it to 1 and insert bill amount. For dynamic bill (user can insert the amount to pay), set it to 0.
 *
 * `billPayorInfo` - If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1
 *
 * `billAmount` - Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0
 *
 * `billReturnUrl` - Key in return Url if you need the bill to be redirected to your own page upon payment completion.
 *
 * `billCallbackUrl` - Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.
 *
 * `billExternalReferenceNo` - Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.
 *
 * `billTo` - If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.
 *
 * `billEmail` - Provide your customer email here
 *
 * `billPhone` - Provide your customer phone number here.
 *
 * `billSplitPayment` - [OPTIONAL] Set 1 if the you need the payment to be splitted to other toyyibPay users.
 *
 * `billSplitPaymentArgs` - [OPTIONAL] Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]
 *
 * `billPaymentChannel` - Set 0 for FPX, 1 Credit Card and 2 for both FPX & Credit Card.
 *
 * `billContentEmail` - [OPTIONAL] Provide additional messages by sending an extra email to your customer. Limited to 1000 characters only.
 *
 * `billChargeToCustomer` - [OPTIONAL] Below are the values available :
 * 1. Leave blank to set charges for both FPX and Credit Card on bill owner.
 * 2. Set "0" to charge FPX to customer, Credit Card to bill owner.
 * 3. Set "1" to charge FPX bill owner, Credit Card to customer.
 * 4. Set "2" to charge both FPX and Credit Card to customer.
 *
 * `billExpiryDate` - [OPTIONAL] Date and time to set the bill as inactive (expired). Payer will not be able to make payment after the expiry date. Here is the datetime sample value: "17-12-2020 17:00:00".
 *
 * `billExpiryDays` - [OPTIONAL] Number of day(s) to allow payment attempt to be made. The bill will be set to inactive after the number of day(s). The default expiry time will be at 23:59:59 on the final day. This parameter is ranged between minimum 1 day to maximum 100 days. The billExpiryDate parameter will be prioritised if both billExpiryDays and billExpiryDate parameters are set.
 * Our API system will return Bill Code in JSON format. In this example, the API return gcbhict9 as bill code. Hence, your payment url will be:- `toyyibpay.com/gcbhict9`
 */
export interface CreateBillParam {
  /**
   * Category Code. Get your Category Code from Create Category API
   */
  categoryCode: string;

  /**
   * Your bill name. Bill Name will be displayed as bill title
   * * Max 30 alphanumeric characters, space and '_' only
   */
  billName: string;

  /**
   * Your bill description.
   * * Max 100 alphanumeric characters, space and '_' only
   */
  billDescription: string;

  /**
   * For fixed amount bill, set it to 1 and insert bill amount. For dynamic bill (user can insert the amount to pay), set it to 0.
   */
  billPriceSetting: `${PriceSettingEnum}` | PriceSettingEnum;

  /**
   * If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1
   */
  billPayorInfo: `${BillPayorInfoEnum}` | BillPayorInfoEnum;

  /**
   * Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0
   */
  billAmount?: number | 0;

  /**
   * Key in return Url if you need the bill to be redirected to your own page upon payment completion.
   */
  billReturnUrl?: string;

  /**
   * Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.
   */
  billCallbackUrl?: string;

  /**
   * Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.
   */
  billExternalReferenceNo?: string;

  /**
   * If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.
   */
  billTo?: string;

  /**
   * Provide your customer email here
   */
  billEmail?: string;

  /**
   * Provide your customer phone number here.
   */
  billPhone?: string;

  /**
   * [OPTIONAL] Set 1 if the you need the payment to be splitted to other toyyibPay users.
   */
  billSplitPayment?: 1;

  /**
   * [OPTIONAL] Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]
   */
  billSplitPaymentArgs?: SplitPaymentArgs[];

  /**
   * Set 0 for FPX, 1 Credit Card and 2 for both FPX & Credit Card.
   */
  billPaymentChannel: `${BillPaymentChannelEnum}` | BillPaymentChannelEnum;

  /**
   * [OPTIONAL] Provide additional messages by sending an extra email to your customer. Limited to 1000 characters only.
   */
  billContentEmail?: string;

  /**
   * [OPTIONAL] Below are the values available :
   * 1. Leave blank to set charges for both FPX and Credit Card on bill owner.
   * 2. Set "0" to charge FPX to customer, Credit Card to bill owner.
   * 3. Set "1" to charge FPX bill owner, Credit Card to customer.
   * 4. Set "2" to charge both FPX and Credit Card to customer.
   */
  billChargeToCustomer?: `${BillChargeToEnum}` | BillChargeToEnum;

  /**
   * [OPTIONAL] Date and time to set the bill as inactive (expired). Payer will not be able to make payment after the expiry date. Here is the datetime sample value: "17-12-2020 17:00:00".
   */
  billExpiryDate?: string;

  /**
   * [OPTIONAL] Number of day(s) to allow payment attempt to be made. The bill will be set to inactive after the number of day(s). The default expiry time will be at 23:59:59 on the final
   */
  billExpiryDays?: number;
}

export interface ITransaction {
  categoryCode: string;
  billName: string;
  billDescription: string;
  billTo: string;
  billEmail: string;
  billPhone: string;
  billSplitPayment?: number;
  billSplitPaymentArgs: SplitPaymentArgs;

  billStatus: string;
  billPermalink: string;
  categoryName: string;
  userName: string;
  billpaymentChannel: string;
  billpaymentSettlement: string;
  billpaymentSettlementDate: string;
  billPaymentDate: string;
  billpaymentStatus: string;
  billpaymentAmount: string;
  billpaymentInvoiceNo: string;

  billExternalReferenceNo: string;
}
export interface CreateCategoryParam {
  /**
   * Category Name
   */
  catname: string;
  /**
   * Category Description
   */
  catdescription: string;
}
export interface GetTransactionParam {
  /**
   * Bill Code of the bill
   * eg: `td8bfqv7`
   */
  billCode: string;
  /**
   * [Optional] Bill Payment Status
   *
   * 1 - Successful transaction
   *
   * 2 - Pending transaction
   *
   * 3 - Unsuccessful transaction
   *
   * 4 - Pending
   */
  billpaymentStatus?: `${BillPaymentStatusEnum}` | BillPaymentStatusEnum;
}
export interface IToyyibPay {
  createCategory: (
    category: CreateCategoryParam
  ) => Promise<ICreatedCategory[]>;
  createBill: (bill: CreateBillParam) => Promise<ICreatedBill[]>;
  getBillTransactions: (query: GetTransactionParam) => Promise<ITransaction[]>;
  getCategoryDetails: (categoryCode: string) => Promise<ICategory[]>;
  inactiveBill: (billCode: string) => Promise<InactivedBillStatus>;
  getBank: () => Promise<IBank[]>;
}

export interface CallbackData {
  refno: string;
  status: string;
  reason: string;
  billcode: string;
  order_id: string;
  amount: string;
  status_id: string;
  msg: string;
  transaction_id: string;
  fpx_transaction_id: string;
  hash: string;
  transaction_time: string;
}
export interface ReturnData {
  status_id: number;
  billcode: string;
  order_id: string;
  msg: string;
  transaction_id: string;
}
