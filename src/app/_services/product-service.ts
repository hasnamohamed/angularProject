import { paymentType } from './../_models/payment-type.model';
import { category } from './../_models/category.model';
import { lang } from './../_models/lang.model';
import { Product } from './../_models/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class ProductService{
 itemAdded : EventEmitter<any> = new EventEmitter<any>();
   productArray: Product[]=[{
    _id:1,
    data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
    price:200,
    discount:30,
    imageUrls:['https://picsum.photos/100/400'],
        count:0,
    category:{id:1,name:'category 1'},
    tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
    paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:2,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:200,
   discount:30,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]

  },
  {
   _id:3,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:200,
   discount:30,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:4,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:200,
   discount:30,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:5,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:800,
   discount:90,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:6,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:3400,
   discount:40,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:7,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:2000,
   discount:10,
   imageUrls:['https://picsum.photos/100/400'],
      count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:8,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:500,
   discount:10,
   imageUrls:['https://picsum.photos/100/400'],
     count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  },
  {
   _id:9,
   data:[{id:1,name:"Product 1", description:"product 1 Description", lang:{id:1,name:'English'}}],
   price:300,
   discount:10,
   imageUrls:['https://picsum.photos/100/400'],
   count:0,
   category:{id:1,name:'category 1'},
   tags:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
   paymentype:[{id:1,name:'payment type visa 1'}]
  }];
    cartArray: Product[]=[];
   constructor(private httpClient:HttpClient){

   }
    getAllProducts(): Observable<{product:Product[], numberOfProducts: number}> {
      const token:string = localStorage.getItem('token')!;
      const headers = new HttpHeaders({
          authorization: token
       })
       return this.httpClient.get<{product:Product[], numberOfProducts: number}>(`${environment.baseUrl}product`, {headers});
    }
    getProductById(id:string): Observable<Product>{
        return this.httpClient.get<Product>(environment.baseUrl+'product/'+id);
    }
    addProduct(product: Product):void{
        this.productArray.push(product)
    }
    deleteProduct(id:number):Product[]{
         return this.productArray.filter(item =>item._id!=id);
    }
    addItemToCart(product:Product): Product[]{
       this.cartArray.push(product); 
      const res =this.cartArray;
      return res;
    }
    updateProduct(){}
     testEmit(product: Product){
     this.itemAdded.emit(product);
         }
    
}