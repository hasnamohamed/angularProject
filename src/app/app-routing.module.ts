import { ProductsComponent } from './features/products/products/products.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { RegisterComponent } from './features/products/register/register.component';
import { LoginComponent } from './features/products/login/login.component';
import { ProductContainerComponent } from './features/products/product-container/product-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';

const routes: Routes = [
  {path:'home', component:ProductContainerComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact-us', component:ProductsComponent},
  {path:'about-us', component:ProductsComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
   {path:'product',children:[
    {path:'add', component:AddProductComponent},
    {path:'details/:productId', component:ProductDetailsComponent},
   ]},


  {path:'**',redirectTo:'/home', pathMatch:'full'},//last one
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
