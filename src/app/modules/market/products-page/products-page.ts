import { Component, OnInit, inject } from '@angular/core';
import { Category } from '../../../model/category';
import { Categories } from '../../core/services/categories';
import { Product } from '../../../model/product';
import { ProductsService } from '../../core/services/products';
@Component({
  selector: 'app-products-page',
  standalone: false,
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage implements OnInit {
  products?: Product[];
  isBusy = false;

  constructor(
    private readonly categoriesService: Categories,
    private readonly productsService: ProductsService = inject(ProductsService),
  ) { }
  categories: Category[] = [
    { name: 'Fruits' },
    { name: 'Vegetables' },
    { name: 'Meats' },
  ];
  selectedCategory?: Category;
  
    async ngOnInit() {
        this.isBusy = true;
        try {
            this.categories = await this.categoriesService.loadCategories();
            this.products = await this.productsService.loadProducts('');
        } finally {
            this.isBusy = false;
        }
    }


  async onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    this.isBusy = true;
    try {
      this.products = await this.productsService.loadProducts(category.name);
    } finally { this.isBusy = false; }
    alert(category.name);
  }
}
