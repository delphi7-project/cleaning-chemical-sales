export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  composition: string[];
  effectiveness: number;
  volume: string;
  usage: string;
  image: string;
  description: string;
  instructions: string;
  storage: string;
  warnings: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}