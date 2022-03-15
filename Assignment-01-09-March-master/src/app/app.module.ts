import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//import here

import { EmployeeComponent } from "./components/employeecomponent/app.employee.component";
import { TableComponent } from './directives/componentsdirective/tablecomponent/app.table.component.directive';
import { ColorDirectives } from './directives/attributedirectives/app.color.directives';
import { EmployeeFormComponent } from './components/employeecomponent/employeeformcomponent/app.employeeform.component';
import { CheckUniqueDirective } from './directives/attributedirectives/app.checkunique.directive';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { SelectComponent } from './directives/componentsdirective/tablecomponent/selectcomponent/app.select.component.directive';
import { ProductListComponent } from './components/productcomponent/app.productlist.component';
import { ProductService } from './services/app.product.service';
import { SearchComponent } from './components/productcomponent/app.productsearch.component';
import { ProductHTTPService } from './services/app.product.http.service';
import { EditComponent } from './components/productcomponent/app.productedit.component';
import { MainRoutingComponent } from './components/productcomponent/app.main.routing';
import { DeleteComponent } from './components/productcomponent/app.productdelete.component';
import { CreateComponent } from './components/productcomponent/app.createproduct.component';
import { Search03Component } from './components/productcomponent/app.productfilter.component';
import { ParentComponent } from './components/employeecomponent/app.parentemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableComponent,
    ColorDirectives,
    EmployeeFormComponent,
    CheckUniqueDirective,
    ProductComponent,
    SelectComponent,
    ProductListComponent,
    SearchComponent,
    EditComponent,
    MainRoutingComponent,
    DeleteComponent,
    CreateComponent,
    Search03Component,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , //load the routing at the root of our app
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
