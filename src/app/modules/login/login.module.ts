import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SharedModule } from '../../shared/shared.module';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';


@NgModule({
  declarations: [SignInComponent, GoogleLoginComponent, FacebookLoginComponent, SocialButtonComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
