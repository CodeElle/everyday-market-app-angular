import { Component, OnInit } from '@angular/core';
import { Categories } from '../../core/services/categories';
import { Category } from '../../../model/category';
import { NewProduct } from '../../../model/new-product';
import { Location } from '@angular/common';
import { ProductsService } from '../../core/services/products'; 

@Component({
  selector: 'app-product-edit-page',
  standalone: false,
  templateUrl: './product-edit-page.html',
  styleUrl: './product-edit-page.css',
})
export class ProductEditPage implements OnInit {
  categories: Category[] = [];
  isBusy = false;

  constructor(
    private readonly location: Location,
    private readonly categoriesService: Categories,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.isBusy = true;

    // mock categories(hardcoded) until backend is ready
    this.categories = [
      { name: 'Fruits' },
      { name: 'Vegetables' },
      { name: 'Meats' },
    ];

    this.isBusy = false;
  }

/*  async/await version
  async ngOnInit(): Promise<void> {
    this.isBusy = true;
    try {
      const result = await this.categoriesService.loadCategories();
      console.log('Loaded categories:', result); // Confirm this logs an array
      this.categories = result;
    } catch (err) {
      console.error('Failed to load categories:', err); // Catch any errors
    } finally {
      this.isBusy = false;
    }
  }

  */
    /*
    try {
      this.categoriesService.loadCategories().then(o => this.categories = o);
    } finally {
      this.isBusy = false;
    }
    */

  onProductSubmit(newProduct: NewProduct) {
    if (!newProduct) {
      this.location.back();
    } else {
      this.isBusy = true;
      try {
        this.productsService.addProduct(newProduct)
          .then(() => this.location.back());
      } finally {
        this.isBusy = false;
      }
    }
  }
}

