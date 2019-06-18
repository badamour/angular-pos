import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {CustomersComponent} from './view/customers/customers.component';
import {ItemsComponent} from './view/items/items.component';
import {OrdersComponent} from './view/orders/orders.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: SidebarComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
