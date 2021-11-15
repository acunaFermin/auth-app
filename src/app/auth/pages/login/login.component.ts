import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵangular_packages_forms_forms_w,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    console.log(
      'valid',
      this.miFormulario.valid,
      'value',
      this.miFormulario.value
    );
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((resp) => {
      console.log(resp);
    });

    //this.router.navigateByUrl('/dashboard');
  }
}
