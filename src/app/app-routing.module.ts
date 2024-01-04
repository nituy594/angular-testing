import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMdvtiComponent } from './components/about-mdvti/about-mdvti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-mdvti', component: AboutMdvtiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
