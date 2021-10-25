import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgParticlesModule } from 'ng-particles';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../components/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [ HomePageComponent, LoginComponent, PasswordForgetComponent, SignupComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    NgxTypedJsModule,
    NgParticlesModule,
    CarouselModule
  ]
})
export class PagesModule { }
