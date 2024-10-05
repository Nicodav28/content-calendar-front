import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public user?: User | null;
  public isLoaded: boolean = false;

  constructor(public readonly authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.isLoaded = true;
    });
  }
}
