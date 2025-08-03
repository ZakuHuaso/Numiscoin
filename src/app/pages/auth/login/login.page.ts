import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonButton,
  IonInput,
  IonItem,
  IonText,
  IonIcon,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonText,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // Navigation to Register page
  onRegister() {
    this.router.navigate(['/auth/register']);
  }

  // Navigation to Forgot Password page
  onForgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

  // Navigation to Home page after login
  onLogin() {
    this.router.navigate(['tabs/home']);
  }

}
