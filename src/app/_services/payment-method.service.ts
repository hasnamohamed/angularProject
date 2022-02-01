import { paymentType } from './../_models/payment-type.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
   paymentMethod:paymentType[]=[
     {id:1,name:'visa'},
     {id:2,name:'MasterCard'},
     {id:3,name:'AmericanExpress'},
     {id:4,name:'PayPal'},
     {id:5,name:'Cash'},
   ]
  constructor() { }
  getAllPaymentMethod():paymentType[]{
   return this.paymentMethod.splice(0);
  }
}
