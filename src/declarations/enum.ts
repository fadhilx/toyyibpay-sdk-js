export enum PriceSettingEnum {
  FIXED = 1,
  DYNAMIC = 0,
}
export enum BillPayorInfoEnum {
  REQUIRED = 1,
  NOT_REQUIRED = 0,
}
export enum BillPaymentChannelEnum {
  FPX = 0,
  CREDIT_CARD = 1,
  BOTH = 2,
}
export enum BillChargeToEnum {
  BOTH_TO_OWNER = "",
  BOTH_TO_CUSTOMER = 2,
  FPX_TO_CUSTOMER_CC_TO_OWNER = 0,
  FPX_TO_OWNER_CC_TO_CUSTOMER = 1,
}
export enum BillPaymentStatusEnum {
  SUCCESSFUL = 1,
  PENDING_TRANSACTION = 2,
  UNSUCCESSFUL = 3,
  PENDING = 4,
}
