import { AuthService } from '@auth0/auth0-angular';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, of, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    switchMap((isAuthenticated) => {
      if (!isAuthenticated) router.navigate(['']);
      return of(isAuthenticated);
    }),
    catchError(() => {
      router.navigate(['']);
      return of(false);
    })
  );
};
