import { LoginComponent } from './features/products/login/login.component';
import { ProductService } from './_services/product-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductPagingComponent } from './features/products/product-paging/product-paging.component';
import { ProductToolsComponent } from './features/products/product-tools/product-tools.component';
import { ProductContainerComponent } from './features/products/product-container/product-container.component';
import { ProductFilterComponent } from './features/products/product-filter/product-filter.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { RegisterComponent } from './features/products/register/register.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ProductsComponent } from './features/products/products/products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductPagingComponent,
    ProductToolsComponent,
    ProductContainerComponent,
    ProductFilterComponent,
    TestComponentComponent,
    ProductDetailsComponent,
    RegisterComponent,
    AddProductComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
