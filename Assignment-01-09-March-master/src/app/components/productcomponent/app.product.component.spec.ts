// defining the test for app.product.component.ts
// TestBed : Provide an execution for the Angular Object Model in Testing Env.
// ComponentFixture: Load Component, Instantiate it and monitor it for any changes
// e.g. DataBinding, Events, etc.

// async: Load and execute Tests Asynchronously
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
// Import Product Component and its dependencies
import { ProductComponent } from './app.product.component';
import { Product } from 'src/app/models/app.product.model';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from 'src/app/directives/componentsdirective/tablecomponent/selectcomponent/app.select.component.directive';
import { ColorDirectives } from 'src/app/directives/attributedirectives/app.color.directives';

describe('Product Components Test', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let table: HTMLElement;
  let button:HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, SelectComponent, ColorDirectives],
      imports: [FormsModule],
    }).compileComponents();
  });
  //Instantiate objects for Testing
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   //Write the Test
   it('if the Products Array is added with new Product data when the Save Button is clicked',()=>{
       //************ARRANGE*************/
       let prd = new Product(90,"abc","abc","abc","abc","abc",90);
       let products:Array<Product> = new Array<Product>();

       products.push(prd);
       component.products = products;
       let count: number = products.length;
       console.log("count is "+count);

       const nativeElement = fixture.nativeElement;
       button = nativeElement.querySelector('.btn-primary');

       //************ACT************/
       const eventType = button.dispatchEvent(new Event('click'));
       fixture.detectChanges();
       //*********ASSERTION*********** */
       expect(nativeElement.querySelector('table').value).toEqual(prd[count]);
   })


   it('if the HTML Table is added with a new row when the save button is clicked',()=>{
    let prd = new Product(90,"abc","abc","abc","abc","abc",90);
    let products:Array<Product> = new Array<Product>();

    products.push(prd);
    component.products = products;

    let count: number = products.length;
    const nativeElement = fixture.nativeElement;
    button = nativeElement.querySelector('.btn-primary');

    //************ACT************/
    const eventType = button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    //*********ASSERTION*********** */
    let a  = nativeElement.querySelectorAll('alpha');
    console.log("length of a "+count);

    expect(a.length).toEqual(0);
   });



});
