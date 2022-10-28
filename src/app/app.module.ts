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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
