import { Component, inject } from '@angular/core';
import { UserService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userService: UserService = inject(UserService);

  constructor() {
    let current = localStorage.getItem("rememberMe");
    if (current !== null) { this.userService.currentUser.next({ id: "1", name: current }); }
  }
 }
