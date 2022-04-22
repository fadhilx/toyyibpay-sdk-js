export enum PriceSettingEnum {
  /** SET TO CERTAIN AMOUNT, DISALLOW CUSTOMER TO CHANGE THE VALUE */
  FIXED = 1,
  /** ALLOW CUSTOMER TO CHANGE THE VALUE */
  DYNAMIC = 0,
}
export enum BillPayorInfoEnum {
  REQUIRED = 0,
  NOT_REQUIRED = 1,
}
export enum BillPaymentChannelEnum {
  FPX = 0,
  CREDIT_CARD = 1,
  BOTH = 2,
}
export enum BillChargeToEnum {
  /** CHARGE BOTH `FPX` AND `CREDIT CARD` TO `OWNER` */
  BOTH_TO_OWNER = "",
  /** CHARGE BOTH `FPX` AND `CREDIT CARD` TO `CUSTOMER` */
  BOTH_TO_CUSTOMER = 2,
  /** CHARGE `FPX` TO CUSTOMER AND `CREDIT CARD` TO OWNER */
  FPX_TO_CUSTOMER_CC_TO_OWNER = 0,
  /** CHARGE `FPX` TO OWNER AND `CREDIT CARD` TO CUSTOMER */
  FPX_TO_OWNER_CC_TO_CUSTOMER = 1,
}
export enum BillPaymentStatusEnum {
  SUCCESSFUL = 1,
  PENDING_TRANSACTION = 2,
  UNSUCCESSFUL = 3,
  PENDING = 4,
}
