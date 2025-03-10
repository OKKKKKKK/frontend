import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { CustomerOrderComponent } from './features/customer/customer-order/customer-order.component';
import { CustomerDashboardComponent } from './features/customer/customer-dashboard/customer-dashboard.component';
import { DistributorDashboardComponent } from './features/distributor/distributor-dashboard/distributor-dashboard.component';
import { ManufacturerDashboardComponent } from './features/manifacturer/manufacturer-dashboard/manufacturer-dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: AppComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'customers', component: CustomerDashboardComponent},
  {path: 'distributors', component: DistributorDashboardComponent},
  {path: 'manufacturer', component: ManufacturerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
