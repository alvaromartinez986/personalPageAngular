import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeDescriptionComponent } from './components/home-description/home-description.component';
import { SpecializeComponent } from './components/specialize/specialize.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { HomeComponent } from './components/home/home.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { AboutComponent } from './components/about/about.component';
import { TimeLineComponent } from './components/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeDescriptionComponent,
    SpecializeComponent,
    FooterComponent,
    HeaderContentComponent,
    HomeComponent,
    AboutSectionComponent,
    TechnicalSkillsComponent,
    AboutComponent,
    TimeLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
