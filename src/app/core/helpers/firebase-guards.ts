import {
  AngularFireAuthGuard,
  AuthPipe,
  AuthPipeGenerator,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const canActivate = (pipe: AuthPipe | AuthPipeGenerator) => ({
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: pipe.name !== '' ? pipe : () => pipe }
})

const redirectLoggedToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin =  () => redirectUnauthorizedTo(['login' ,'sign-in']);

export const redirectUnauthorizedToLoginGuard = canActivate(redirectUnauthorizedToLogin);
export const redirectLoggedToHomeGuard = canActivate(redirectLoggedToHome);

