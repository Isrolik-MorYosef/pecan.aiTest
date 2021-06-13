import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {StoreModule} from "@ngrx/store";
import {addProductReducer } from './store/product.reducer';
import {FormsModule} from "@angular/forms";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product: addProductReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
