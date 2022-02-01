import { ProductService } from './../../_services/product-service';
import { Product } from './../../_models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  addedProduct: Product[]=[];
  // counts: { [key: string]: number } = {};
  total=0;
  cart!:{
    productArray: Product[],
    quantity:number
  }
  delete(prod : Product){
    if(prod.count>1){
      prod.count--;
      
    }
    else{
      this.addedProduct.splice(this.addedProduct.indexOf(prod),1);
      
    }
    this.total--;
  }
  constructor(private productService : ProductService) {}
  cartIsOpen = false;
  ngOnInit(): void {
    // this.addedProduct =this.productService.cartArray;
     this.productService.itemAdded.subscribe(
       (next)=>{
         this.cart.productArray.push(next);
         this.cart.quantity++;
         console.log()
       },
       (error)=>{},
       ()=>{}
     );
  }
}
