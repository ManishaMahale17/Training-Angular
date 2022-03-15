import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product2 } from 'src/app/models/app.product.model';
import { ProductHTTPService } from 'src/app/services/app.product.http.service';

@Component({
  selector: 'app-createproduct-component',
  templateUrl: './app.createproduct.view.html'
})

export class CreateComponent implements OnInit {
  prod:Product2 = new Product2(0,"","","","","",0);
  categories = Categories;
  manufacturers = Manufacturers;
  status = false
  constructor(private serv:ProductHTTPService,private router:Router) { }

  ngOnInit() { }

  postData(){
    this.serv.saveProducts(this.prod).subscribe
    (res => console.log(res),error => console.log(error));
    this.prod = new Product2(0,"","","","","",0);
    this.navigateToListPage();
  }

  onCatNameReceived(event: any): void {
    this.prod.categoryName = event;
    console.log(`Category NAme ${this.prod.categoryName}`);
  }
  onManufacturerReceived(event: any): void {
    this.prod.manufacturer = event;
    console.log(`Manufacturer NAme ${this.prod.manufacturer}`);
  }
  onSubmit(){
    this.status = true;
    this.postData();
  }
  navigateToListPage(){
    this.router.navigate(['/']);
  }
}
