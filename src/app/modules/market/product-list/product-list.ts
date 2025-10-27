import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products?: Product[];
}
