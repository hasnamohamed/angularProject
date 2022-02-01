import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPagingComponent } from './product-paging.component';

describe('ProductPagingComponent', () => {
  let component: ProductPagingComponent;
  let fixture: ComponentFixture<ProductPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
