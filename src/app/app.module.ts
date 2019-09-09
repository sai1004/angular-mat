import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "./shared/shared.module";
import { NavComponent } from './components/nav/nav.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BannerComponent } from './components/banner/banner.component';
import { MaxitLandingPageComponent } from './pages/maxit-landing-page/maxit-landing-page.component';
import { MaxitBannerComponent } from './components/maxit-banner/maxit-banner.component';
import { MaxitNavComponent } from './components/maxit-nav/maxit-nav.component';
import { MaxitFooterComponent } from './components/maxit-footer/maxit-footer.component';
import { MaxitDesignComponent } from './components/maxit-design/maxit-design.component';

// import { CartItemService } from './components/cart-item.service';
 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    BannerComponent,
    MaxitLandingPageComponent,
    MaxitBannerComponent,
    MaxitNavComponent,
    MaxitFooterComponent,
    MaxitDesignComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }