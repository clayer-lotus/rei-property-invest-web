import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { CeoSaysComponent } from './components/ceo-says/ceo-says.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetStartedComponent,
    CeoSaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
