import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

}
