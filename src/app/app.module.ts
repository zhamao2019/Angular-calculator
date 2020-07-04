import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { CalculatorSharedCostComponent } from './calculator-shared-cost/calculator-shared-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculaterComponent,
    CalculatorSharedCostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
