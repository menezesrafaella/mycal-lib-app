import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MycalcLibModule } from 'mycalc-lib';

import { AppComponent } from './app.component';
import { TddAngularComponent } from './tdd-angular/tdd-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    TddAngularComponent
  ],
  imports: [
    BrowserModule,
    MycalcLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
