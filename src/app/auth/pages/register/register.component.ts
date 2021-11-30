import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

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

  registro() {
    const { name, email, password } = this.miFormulario.value;
    this.AuthService.registro(name, email, password).subscribe((resp) => {
      if (resp.ok) {
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire('Error', resp.error.msg, 'error');
      }
    });
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AuthService: AuthService
  ) {}
}
