export interface Data {
  item: {
    productName: string;
    DateOfPurchase: string;
    productImage: string;
  };
}

export interface RecycleData extends Data {
  type: string;
}
