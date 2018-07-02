import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Http,	HttpModule ,  Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { ProductlistingComponent } from './productlisting.component';
import { AddCartComponent } from './add-cart.component';


@NgModule({
  declarations: [
    AppComponent, ProductlistingComponent, AddCartComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
