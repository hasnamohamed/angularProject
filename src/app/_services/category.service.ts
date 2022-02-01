import { category } from './../_models/category.model';
import { ProductService } from './product-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService { 
  categories:category[]=[
   {id:1,name:'fruits'},
   {id:2,name:'vegetables'},
   {id:3,name:'dairy'},
   {id:4,name:'beh'},
   {id:5,name:'frui'},
   {id:6,name:'veget'},
   {id:7,name:'dai'},
   {id:8,name:'behdrh'},
  ]
  constructor(private pros:ProductService) {}
    getAllCategories(): category[]{
      return this.categories.splice(0);
  }
  getCategoryByID(id:number):category | undefined{
    return this.categories.find(category => category.id===id);
  }
  add(){}
  edit(){}
  delete(){}
}
