import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { CeoSaysComponent } from './components/ceo-says/ceo-says.component';
import { IndustrySpecificPodioComponent } from './components/industry-specific-podio/industry-specific-podio.component';
import { IntegrationPodioComponent } from './components/integration-podio/integration-podio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadingIntroComponent } from './components/heading-intro/heading-intro.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetStartedComponent,
    CeoSaysComponent,
    IndustrySpecificPodioComponent,
    IntegrationPodioComponent,
    TestimonialsComponent,
    FooterComponent,
    ServicesHomeComponent,
    PricingComponent,
    NavbarComponent,
    HeadingIntroComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
