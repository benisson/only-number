import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {OnlyNumberDirective} from './only-number.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, OnlyNumberDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
