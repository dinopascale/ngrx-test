import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent {

  private readonly MapMethod = new Map<string, () => Promise<UserCredential>>([
    ['facebook', () => this.fireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())],
    ['google', () => this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())]
  ])

  constructor(public fireAuth: AngularFireAuth) {}

  login(social: string): void {
    fromPromise(this.MapMethod.get(social)())
      .subscribe(
        s => console.log(s),
        e => console.log(e)
      )
  }

  logout(): void {
    fromPromise(this.fireAuth.auth.signOut())
      .subscribe(
        s => console.log('successo ', s),
          e => console.log('errore ', e)
      );
  }
}
