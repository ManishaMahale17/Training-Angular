import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product2 } from 'src/app/models/app.product.model';
import { ProductHTTPService } from 'src/app/services/app.product.http.service';

@Component({
  selector: 'app-productdelete-component',
  templateUrl: './app.productdelete.view.html'
})

export class DeleteComponent implements OnInit {
  id: number;
  prod: Product2;
  categories = Categories
  manufacturers = Manufacturers
  constructor(
    private act: ActivatedRoute,
    private router: Router,
    private serv: ProductHTTPService
  ) {}

  ngOnInit() {
    this.prod = new Product2(0, '', '', '', '', '', 0);
    this.id = this.act.snapshot.params['id'];
    this.serv.getProdctsById(this.id).subscribe(
      res => {
        console.log(res);
        this.prod = res;
      },
      (error) => console.log(error)
    );
  }

  deleteProduct(){
    this.serv.deleteProduct(this.id).subscribe(
      res => console.log(res),error => console.log(error));
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
  navigateToListPage(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    this.deleteProduct();
  }
}
