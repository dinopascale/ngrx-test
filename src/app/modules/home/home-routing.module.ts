import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { redirectUnauthorizedToLoginGuard } from '../../core/helpers/firebase-guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    ...redirectUnauthorizedToLoginGuard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
