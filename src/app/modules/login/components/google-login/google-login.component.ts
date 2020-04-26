import { Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.sass']
})
export class GoogleLoginComponent extends SocialButtonComponent {
  constructor() {
    super('google');
  }
}
