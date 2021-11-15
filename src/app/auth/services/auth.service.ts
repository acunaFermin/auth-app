import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth/`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body);
  }
}
