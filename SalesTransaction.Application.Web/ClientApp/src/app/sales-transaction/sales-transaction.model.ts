export interface MvSalesTransactionDetail {
  salesTransactionId: number;
  customerId: number;
  customerName: string;
  productId: number;
  producctName: string;
  quantity: number;
}
export interface MvNewSalesTransaction{
  customerId: number;
  productId: number;
  quantity: number;
}
