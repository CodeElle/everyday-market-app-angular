import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../model/category';
import { NewProduct } from '../../../model/new-product';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  @Input() categories!: Category[];

  

  product: NewProduct = {
    title: '',
    description: '',
    category: '',
  };

  @Output() productSubmit = new EventEmitter<NewProduct>();
  onSubmit(ok: boolean) {
    this.productSubmit.emit(ok ? this.product : undefined);

  }
  ngOnInit() {
    console.log('Received categories:', this.categories);
  }

}
