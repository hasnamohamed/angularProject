import { ProductService } from './../../../_services/product-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProductArray!: Product[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
this.activatedRoute.snapshot.queryParams;
    this.activatedRoute.params.subscribe(
      (params) => {
        const id= params['productId'];
        if (id) {
          this.getProductById(id);
          this.getAllProduct();
        }
      },
      (err) => {},
      () => {}
    );
  }
  getProductById(id: string) {
    this.productService.getProductById(id).subscribe(
      (res) => {
        this.product = res;
      },
      (err) => {},
      () => {}
    );
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.relatedProductArray = res.product.splice(0, 6);
      },
      (err) => {},
      () => {}
    );
  }
}
