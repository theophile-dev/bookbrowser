import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdzRoutingModule } from './adz-routing.module';
import { AdzComponent } from './adz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BookModule } from './book/book.module';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdzComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AdzRoutingModule,
    BrowserAnimationsModule,
    BookModule,
    HttpClientModule
  ],
  providers: [ApiService, HttpClient],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
