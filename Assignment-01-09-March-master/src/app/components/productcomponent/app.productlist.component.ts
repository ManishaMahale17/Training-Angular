import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.product.model';
import { ProductLogic } from 'src/app/models/app.productlogic';
import { ProductService } from 'src/app/services/app.product.service';

@Component({
  selector: 'app-productlist-component',
  templateUrl: './app.productlist.view.html',
})
export class ProductListComponent implements OnInit {
  product: Product;
  productLogic: ProductLogic;
  products: Array<Product>;
  showProducts: Array<Product>;
  columnHeaders: Array<string>;
  //showProducts:Array<Product>
  constructor(private serv: ProductService) {
    this.product = new Product(0, '', '', '', '', '', 0);
    //this.products = new Array<Product>();
    this.productLogic = new ProductLogic();
    this.columnHeaders = new Array<string>();
    //  this.showProducts = new Array<Product>();
  }

  ngOnInit() {
    // this.products = this.productLogic.getProducts();
    // this.columnHeaders = Object.keys(this.product);
    this.serv.notify.subscribe((pro: Array<Product>) => {
      this.products = pro;
    });
  }

  get ShowProducts(): Array<Product> {
    this.showProducts = this.serv.getProducts();
    return this.showProducts;
  }
  getselectedproduct(prd: Product) {
    this.serv.getUpdatedProducts(prd);
  }
}
