import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaxitLandingPageComponent } from './pages/maxit-landing-page/maxit-landing-page.component';
import { MaxitAboutPageComponent } from './pages/maxit-about-page/maxit-about-page.component';


const routes: Routes = [
  {path: '', component:WelcomeComponent },
  {path: 'maxit', component:MaxitLandingPageComponent },
  { path:'max-about', component:MaxitAboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
