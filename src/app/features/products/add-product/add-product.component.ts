import { PaymentMethodService } from './../../../_services/payment-method.service';
import { paymentType } from './../../../_models/payment-type.model';
import { Product } from './../../../_models/product.model';
import { CategoryService } from './../../../_services/category.service';
import { category } from './../../../_models/category.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 categories!:category[];
 paymentTypess!:paymentType[];
 product = {} as Product;
  constructor(private categoryService:CategoryService,private paymentMethod:PaymentMethodService, private router: Router) { }
 
  ngOnInit(): void {
    this.categories=this.getAllCategories();
    this.product.price=90;
    this.paymentTypess=this.getAllPaymentTypes();
  }
  getAllCategories():category[]{
   return this.categoryService.getAllCategories();
  }
  getAllPaymentTypes():paymentType[]{
  return this.paymentMethod.getAllPaymentMethod();
  }
  onChechBoxChanged(i:number){
   this.paymentTypess[i];
  }
  onFormSubmit(form:NgForm):void{
    this.router.navigateByUrl('/home');
    console.log(form.value);
 
  }
}
