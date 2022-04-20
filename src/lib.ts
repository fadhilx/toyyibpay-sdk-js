// Generated by https://quicktype.io

export interface CreateBillData {
  categoryCode: string;
  billName: string;
  billDescription: string;
  billPriceSetting: number;
  billPayorInfo: number;
  /**
   * Key in the bill amount. The amount is in cent. e.g. 100 = RM1.
   * If you set billPriceSetting to 1 (dynamic bill), please put 0
   */
  billAmount: number;
  billReturnUrl: string;
  billCallbackUrl: string;
  billExternalReferenceNo: string;
  billTo: string;
  billEmail: string;
  billPhone: string;
  billSplitPayment?: number;
  billSplitPaymentArgs?: string;
  billPaymentChannel: string;
  billContentEmail?: string;
  billChargeToCustomer?: number;
  billExpiryDate?: string;
  billExpiryDays?: number;
}

class ToyyibPay {
  private token: string;
  host: "https://toyyibpay.com/" | "https://dev.toyyibpay.com/";

  private request(api: string, data: any) {}

  constructor(token: string, mode: "sandbox" | "live" = "sandbox") {
    this.token = token;
    this.host =
      mode === "live" ? "https://toyyibpay.com/" : "https://dev.toyyibpay.com/";
  }
  createCategory(
    catname: string,
    catdescription: string
  ): { CategoryCode: string }[] {
    return [{ CategoryCode: "j0tzqhka" }]; //todo
  }
  createBill(data: Partial<CreateBillData>): { BillCode: string }[] {
    return [{ BillCode: "gcbhict9" }]; //todo
  }
  getBillTransactions(billCode: string, billpaymentStatus?: string) {
    return [
      {
        billName: "Payment_for_order_51",
        billDescription: "Payment_for_order_51",
        billTo: "",
        billEmail: "",
        billPhone: "",
        billStatus: "1",
        billPermalink: "zyq1pq6s",
        categoryCode: "vkptzhxe",
        categoryName: "Wordpress",
        userName: "fitweb",
        billpaymentChannel: "FPX",
        billSplitPayment: null,
        billSplitPaymentArgs: null,
        billpaymentSettlement: "Settlement Done",
        billpaymentSettlementDate: "2020-03-04 08:53:13",
        billPaymentDate: "03-03-2020 06:24:08",
        billpaymentStatus: "3",
        billpaymentAmount: "1.00",
        billpaymentInvoiceNo: "B00040-288-424703111018",
      },
    ];
  }
  getCategory(categoryCode: string) {
    return [
      {
        categoryName: "Makanan",
        categoryDescription: "Kuih Cara",
        categoryStatus: "1",
      },
    ];
  }
  inactiveBill(billCode: string): {
    status: "success" | "failed";
    result: string;
  } {
    return { status: "success", result: "Bill status changed to inactive" };
  }
  logStatus() {
    console.log({
      token: this.token,
    });
  }
  //   callbackParameter() {}
  //   returnUrlParameter() {}
}

export default ToyyibPay;
