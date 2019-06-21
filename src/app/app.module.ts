import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {CustomersComponent} from './view/customers/customers.component';
import {ItemsComponent} from './view/items/items.component';
import {OrdersComponent} from './view/orders/orders.component';
import {SlidebarComponent} from './view/slidebar/slidebar.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerService} from './service/customer.service';
import {ItemService} from './service/item.service';
import {OrderService} from './service/order.service';
import {OrderDetailService} from './service/orderDetail.service';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    ItemService,
    OrderService,
    OrderDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
