import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
