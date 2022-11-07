import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  { "path": '', component: HomeComponent },
  { "path": 'home', component: HomeComponent },
  { "path": 'header', component: HeaderComponent },
  { "path": 'cv', component: CvComponent },
  { "path": '**', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
