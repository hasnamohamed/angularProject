import { Product } from './_models/product.model';
import { Component, Input } from '@angular/core';
// export interface cart{
//   productArray: {
//     product: Product,
//     quantity:number
//   }[];
//   totalNumberOfElemet: Number;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addedProducts: Product[]=[];
  onItemAdded(product : Product){
    const index= this.addedProducts.findIndex(p =>p.data[0].name== product.data[0].name)
    if(index > -1)
    {
      this.addedProducts[index].count++; 
    }
    else{
      product.count++;
    this.addedProducts.push(product);
  }
  }
} 
