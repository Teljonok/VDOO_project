
//common interface for products
// most of the fields in products is common , in this case i made it one for all

export class Product {
  vendor: string;
  name: string;
  price: number|string;
  is_hybrid?:boolean;
  system?: string;
}

