import { ProductMedia } from './product-media';

export interface Product {
  ProductId?: number;
  title: string;
  description: string;
  media: ProductMedia[];
}
