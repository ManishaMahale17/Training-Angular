import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from 'src/app/models/app.constants';
import { Product } from 'src/app/models/app.product.model';
import { ProductLogic } from 'src/app/models/app.productlogic';
import { ProductService } from 'src/app/services/app.product.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-productfilter-component',
  templateUrl: './app.productfilter.view.html'
})

export class Search03Component implements OnInit {
  product:Product = new Product(0,"","","","","",0);
  products:Array<Product>;
  private logic:ProductLogic;
  text:string = "";
  categories = Categories;
  manufacturers = Manufacturers;
  constructor(private serv:ProductService) { }


  ngOnInit() {
    this.serv.notify.subscribe((pro: Product) => {
      this.product = pro;
    });
   }
  onCatNameReceived(event: any): void {
    this.product.CategoryName = event;
    console.log(`Category NAme ${this.product.CategoryName}`);
  }
  onManufacturerReceived(event: any): void {
    this.product.Manufacturer = event;
    console.log(`Manufacturer NAme ${this.product.Manufacturer}`);
  }
  searchDataByCategory() {
     this.serv.searchProductByCat(this.product.CategoryName);

  }
  searchDataByManufacturer() {
    this.serv.searchProductByMan(this.product.Manufacturer);
  }

  searchDataByText(str:any) {
    console.log(event);
    this.text = str;
    this.serv.searchProductByText(this.product.CategoryName);
  }
}
