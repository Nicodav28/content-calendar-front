import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { NAuth0 } from '../../model/auth0.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public user?: NAuth0.UserInfo | null;
  public isLoaded: boolean = false;

  constructor(public readonly authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.user = user as NAuth0.UserInfo;
      this.isLoaded = !!user;
    });
  }
}
