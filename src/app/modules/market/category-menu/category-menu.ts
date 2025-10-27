import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-category-menu',
  standalone: false,
  templateUrl: './category-menu.html',
  styleUrl: './category-menu.css',
})
export class CategoryMenu {
  @Input() categories: Category[] = [];
  @Output() categoryChanged = new EventEmitter<Category>();

  selectedCategoryName?: string;

  onCategorySelected(categoryName: string) {
    const cat = this.categories.find(c => c.name === categoryName);
    if (cat) {
      this.selectedCategoryName = cat.name;
      this.categoryChanged.emit(cat);
    }
  }
}
