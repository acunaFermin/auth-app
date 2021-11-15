import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
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

    this.router.navigateByUrl('/dashboard');
  }
  constructor(private fb: FormBuilder, private router: Router) {}
}
