import { AuthService } from './../../../_services/auth/auth.service';
import { ProductService } from './../../../_services/product-service';
import { Product } from './../../../_models/product.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  productArray!: Product[];
  productArray$:any;
    constructor(private productService: ProductService , private authService :AuthService) { }
  @Output()
  itemAddedFromProductListComponent: EventEmitter<Product> = new EventEmitter<Product>();
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productArray = res.product;
      },
      (err)=>{
        console.log("error from backend")
      },
      ()=>{},
    );
    const user={
      email:"hasnaa@any.com",
      password:"12345678"
    };
   this.authService.login(user).subscribe(
     (res)=>{
       localStorage.setItem('token',res.token)
     }
   
   )
  }
  onItemAdded(product : Product ){
      this.itemAddedFromProductListComponent.emit(product)
  }
}
