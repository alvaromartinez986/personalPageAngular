import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
