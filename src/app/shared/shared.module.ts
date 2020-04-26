import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  exports: [
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class SharedModule { }
