import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  email? = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
      this.userService.isLoggedIn.subscribe(loggedIn => {
          this.isLoggedIn = loggedIn;
          if (loggedIn) {
              this.userService.getCurrentUser().subscribe(user => {
                  this.email = user.Email;
              });
          }
      });
  }

  logout() {
      this.userService.logout();
      this.router.navigate(['/']);
  }
}
