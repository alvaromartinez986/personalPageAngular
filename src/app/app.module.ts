import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderShowcaseComponent } from './components/header-showcase/header-showcase.component';
import { SpecializeComponent } from './components/specialize/specialize.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderShowcaseComponent,
    SpecializeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
