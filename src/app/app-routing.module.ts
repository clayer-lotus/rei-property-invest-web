import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pricing', component: PricingComponent},
  // {path:'about', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'products', component: ProductsComponent},
  {path: 'terms-and-condition', component: TermsAndConditionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
