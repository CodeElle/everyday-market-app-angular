import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryMenuItem } from './category-menu-item/category-menu-item';
import { CategoryMenu } from './category-menu/category-menu';
import { ProductsPage } from './products-page/products-page';
import { ProductCard } from './product-card/product-card';
import { ProductList } from './product-list/product-list';
import { SharedModule } from '../shared/shared-module';
import { ProductViewPage } from './product-view-page/product-view-page';
import { ProductEditPage } from './product-edit-page/product-edit-page';
import { ProductForm } from './product-form/product-form';
import { ProductDetails } from './product-details/product-details';
import { PlusButton } from '../shared/plus-button/plus-button'; 

const routes = [
  { path: 'products', component: ProductsPage },
  { path: 'products/new', component: ProductEditPage },
  { path: 'products/:id', component: ProductViewPage },
];

@NgModule({
  declarations: [
    CategoryMenuItem,
    CategoryMenu,
    ProductsPage,
    ProductCard,
    ProductList,
    ProductViewPage,
    ProductEditPage,
    ProductDetails
  ],
  imports: [
    CommonModule,
    PlusButton,
    SharedModule,
    ProductForm,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductsPage,
    CategoryMenuItem
  ]
})
export class MarketModule { }
