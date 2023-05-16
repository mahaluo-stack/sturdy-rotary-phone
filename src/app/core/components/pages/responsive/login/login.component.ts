import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isSubmitted: boolean = false;

  loginForm = this.formBuilder.group({
    email: [localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [localStorage.getItem("rememberMe") ? true : false]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}

  onSubmit(): void {
    if (!this.loginForm.invalid) {
      localStorage.setItem("token", "tokenation tokeroo");
      if (this.loginForm.value.rememberMe) { 
        localStorage.setItem("rememberMe", this.loginForm.value.email!); 
      }
      else {
        localStorage.removeItem("rememberMe");
      }

      this.userService.setCurrentUser(this.loginForm.value.email!);
      this.loginForm.reset();
      this.route.navigateByUrl("home");
    }
    this.isSubmitted = true;
  }
}
