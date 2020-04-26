import { Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.sass']
})
export class FacebookLoginComponent extends SocialButtonComponent {
  constructor() {
    super('facebook')
  }
}
