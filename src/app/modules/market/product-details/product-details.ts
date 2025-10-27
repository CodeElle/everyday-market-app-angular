import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  @Input() product?: Product;

  get primaryImageSrc() {
    return this.product && this.product.media && this.product.media.length > 0
      ? this.product.media[0].url
      : null;
  }
}
