import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { redirectLoggedToHomeGuard } from '../../core/helpers/firebase-guards';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    // ...redirectLoggedToHomeGuard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
