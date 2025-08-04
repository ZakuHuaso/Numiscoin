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
import { ToastController } from '@ionic/angular';

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
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  // Navigation to Register page
  onRegister() {
    this.router.navigate(['/auth/register']);
  }

  // Navigation to Forgot Password page
  onForgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

  // Navigation to Home page with hardcoded credentials
  // This should be replaced with a proper authentication service in production
  async onLogin() {
      this.router.navigate(['tabs/home']);
      await this.presentToast('Credenciales correctas', 'success');

  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }
}
