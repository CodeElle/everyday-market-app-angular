import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products';
import { Product } from '../../../model/product';
@Component({
  selector: 'app-product-view-page',
  standalone: false,
  templateUrl: './product-view-page.html',
  styleUrl: './product-view-page.css',
})
export class ProductViewPage implements OnInit {
  /* For Reference - Using inject() function
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  */
  product!: Product;
  isBusy = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService,
  ) { }
  ngOnInit(): void {
    // should generally use the observer and subscribe

    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = +(idParam ?? '0');

    this.isBusy = true;
    try {
      this.productsService.loadProduct(productId).then(p => this.product = p);
    } finally {
      this.isBusy = false;
    }
  }
}
