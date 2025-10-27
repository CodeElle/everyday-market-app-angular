import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../model/product';
import { NewProduct } from '../../../model/new-product';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUri = environment.marketApiBaseUri;

  constructor(private readonly http: HttpClient) { }

  loadProducts(categoryName: string): Promise<Product[]> {
    return this.http
      .get(`${this.apiUri}products/searchcategory/${categoryName}`)
      .toPromise()
      .then(result => result as Product[]);
  }
  
  loadProduct(id: number) {
    return this.http
      .get(`${this.apiUri}products/${id}`)
      .toPromise()
      .then(result => result as Product);
  }

  addProduct(product: NewProduct) {
    return this.http
      .post(`${this.apiUri}products/slim`, product)
      .toPromise()
      .then(result => result as Product);
  }
}
