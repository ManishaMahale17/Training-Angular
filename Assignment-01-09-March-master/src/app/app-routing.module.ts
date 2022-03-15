import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/productcomponent/app.createproduct.component';
import { DeleteComponent } from './components/productcomponent/app.productdelete.component';
import { EditComponent } from './components/productcomponent/app.productedit.component';
import { SearchComponent } from './components/productcomponent/app.productsearch.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'add',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete/:id',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
