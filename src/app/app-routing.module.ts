import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaxitLandingPageComponent } from './pages/maxit-landing-page/maxit-landing-page.component';


const routes: Routes = [
  {path: '', component:WelcomeComponent },
  {path: 'maxit', component:MaxitLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
