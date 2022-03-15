import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeScan, Observable } from 'rxjs';
import { ResponseData } from 'src/app/models/app.communication.model';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product, Product2 } from 'src/app/models/app.product.model';
import { ProductHTTPService } from 'src/app/services/app.product.http.service';

@Component({
  selector: 'app-productsearch-component',
  templateUrl: './app.productsearch.view.html',
})
export class SearchComponent implements OnInit {
  product: Product2;
  products: Array<Product2>;
  msg: string;
  id:number;
  // response: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  constructor(private serv: ProductHTTPService,private router:Router) {
    // this.products = new Array<Product>();
    this.product = new Product2(0, '', '', '', '', '', 0);
    this.msg = '';
    this.id = 0;

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.serv.getProds().subscribe({
      next: (res: any) => {
        console.log('My data ' + JSON.stringify(res['content']));
        this.products = res['content'];
        console.log("Product array "+this.products);
      },
      error: (error: any) => {
        this.msg = `Error Occurred while receiving data ${error}`;
      },
    });
  }


  searchDataByCategory() {
    console.log('cat is ' + this.product.categoryName);

    this.serv.searchProducts(this.product.categoryName).subscribe({
      next: (res: any) => {
        this.products = res['content'];
      },
      error: (error: any) => {
        this.msg = `Error Occurred while receiving data ${error}`;
      },
    });
  }
  searchDataByManufacturer() {
    console.log('cat is ' + this.product.manufacturer);

    this.serv.searchProducts(this.product.manufacturer).subscribe({
      next: (res: any) => {
        this.products = res['content'];
      },
      error: (error: any) => {
        this.msg = `Error Occurred while receiving data ${error}`;
      },
    });
  }

  onCatNameReceived(event: any): void {
    this.product.categoryName = event;
    console.log(`Category NAme ${this.product.categoryName}`);
  }
  onManufacturerReceived(event: any): void {
    this.product.manufacturer = event;
    console.log(`Manufacturer NAme ${this.product.manufacturer}`);
  }


  // navigation
  navigateToEditComponent(id:number):void{
    this.router.navigate(['edit',id]);
  }

  navigateToDeleteComponent(id:number):void{
    this.router.navigate(['delete',id]);
  }
}
