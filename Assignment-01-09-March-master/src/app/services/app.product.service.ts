import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/app.product.model';
import { ProductLogic } from '../models/app.productlogic';
@Injectable({ providedIn: 'root' })
export class ProductService {
  product: Product;
  notify: EventEmitter<Array<Product>>;
  productNotify: EventEmitter<Product>;
  searchNotify: EventEmitter<Product>;
  productLogic: ProductLogic;
  products: Array<Product>;
  constructor() {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.productLogic = new ProductLogic();
    this.notify = new EventEmitter<Array<Product>>();
    this.productNotify = new EventEmitter<Product>();
    this.searchNotify = new EventEmitter<Product>();
    this.products = new Array<Product>();
  }

  updateDataOnSave(p: Product) {
    this.product = p;
    console.log('idddd ' + p.ProductRowId);

    if (p.ProductRowId !== 0) {
      console.log('a');

      this.products = this.productLogic.updateProduct(p);
    } else {
      console.log('b');

      this.productLogic.updateProduct(p);
    }
    console.log('ALl Products' + this.products);
    this.notify.emit(this.products);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  getUpdatedProducts(prd: Product) {
    this.product = prd;
    this.productNotify.emit(this.product);
  }
  getProductsByRowID(id: number) {
    return this.products.find((p) => p.ProductRowId == id);
  }

  searchProductByCat(cat: string) {
    this.products = this.productLogic.filterProductByCat(cat);
    this.notify.emit(this.products);
  }
  searchProductByMan(man: string) {
    this.products = this.productLogic.filterProductByMan(man);
    this.notify.emit(this.products);
  }
  searchProductByText(text:string){
    this.products = this.productLogic.filterProductByCat(text);
    this.notify.emit(this.products);
  }
}
