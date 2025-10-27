import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: false,
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css',
})
export class CategoryMenuItem {
  @Input() categoryName?: string;
  @Input() checked = false;
  @Output() selected = new EventEmitter<string>();

  onSelected() {
    this.selected.emit(this.categoryName);

    console.log("You selected category: " + this.categoryName);
  }
}
