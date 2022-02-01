import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToolsComponent } from './product-tools.component';

describe('ProductToolsComponent', () => {
  let component: ProductToolsComponent;
  let fixture: ComponentFixture<ProductToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
