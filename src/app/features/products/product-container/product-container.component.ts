import { Product } from './../../../_models/product.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {
  @Output()
  onItemAddedFromContainer : EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(product:Product){
    this.onItemAddedFromContainer.emit(product);
  }

}
