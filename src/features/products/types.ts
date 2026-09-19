export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}