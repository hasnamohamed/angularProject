import { ProductService } from './../../../_services/product-service';
import { Product } from './../../../_models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 @Input()
  productItem!: Product;

  constructor(private productService : ProductService) { }
  
  ngOnInit(): void {
  }
  onAddToCardPress(){
    this.productService.itemAdded.emit(this.productItem)
    // this.productService.addItemToCart(this.productItem);
  }
}
