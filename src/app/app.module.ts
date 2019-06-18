import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {CustomersComponent} from './view/customers/customers.component';
import {ItemsComponent} from './view/items/items.component';
import {OrdersComponent} from './view/orders/orders.component';
import {SlidebarComponent} from './view/slidebar/slidebar.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    ItemsComponent,
    OrdersComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
