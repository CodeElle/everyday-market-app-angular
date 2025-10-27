import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product?: Product;

  get primaryImageSrc() {
    const hasMedia =
      this.product && this.product.media && this.product.media.length > 0;
    return hasMedia
      ? this.product?.media[0].url
      : null;

      /*
      //Previous version:

  get primaryImageSrc() {
    if (this.product && this.product.media.length > 0) {
      return this.product.media[0].url;
    }
    return null;
    */
  }

}
