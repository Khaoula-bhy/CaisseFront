import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import { FacturesComponent } from './factures/factures.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    ClientsComponent,
    FacturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
