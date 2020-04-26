import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import { fromPromise } from 'rxjs/internal-compatibility';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { login, logout } from '../../../../store/actions/login-page.actions';
import * as fromUser from '../../../../store/selectors';
import { AppState } from '../../../../store/reducers';
import { UserState } from '../../../../store/reducers/user.reducer';

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

  test$: Observable<UserState>

  constructor(public fireAuth: AngularFireAuth, private store: Store<AppState>) {
    this.test$ = this.store.pipe(select(fromUser.selectUser))
  }

  login(social: string): void {
    fromPromise(this.MapMethod.get(social)())
      .pipe(
        catchError(err => throwError(err)),
        switchMap(_ => this.fireAuth.user),
        filter(user => !!user),
      )
      .subscribe(
        ({displayName, email, photoURL}) => this.store.dispatch(login({username: displayName, email, image: photoURL})),
        e => console.log(e)
      )
  }

  logout(): void {
    fromPromise(this.fireAuth.auth.signOut())
      .pipe(
      )
      .subscribe(
        (_) => this.store.dispatch(logout()),
          e => console.log('errore ', e)
      );
  }
}
