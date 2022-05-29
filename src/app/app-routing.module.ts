import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ClientsComponent } from './clients/clients.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FacturesComponent } from './factures/factures.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  
  { path: 'home/editProduct/:id', component: EditProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'factures', component: FacturesComponent },
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
