import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdzRoutingModule } from './adz-routing.module';
import { AdzComponent } from './adz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AdzComponent
  ],
  imports: [
    BrowserModule,
    AdzRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AdzComponent]
})
export class AdzModule { }
