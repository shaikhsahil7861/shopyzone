export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}
