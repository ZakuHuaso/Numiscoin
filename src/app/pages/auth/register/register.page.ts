import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonInput,
    IonItem,
    IonText,
    CommonModule,
    FormsModule,
  ],
})
export class RegisterPage implements OnInit {
  constructor( 
    private router: Router 
  ) {
  }

  ngOnInit() {}

  //After registration, navigate to the login page
  submitRegister() {
    // Logic for registration goes here
    // After successful registration, navigate to the login page
    this.router.navigate(['/auth/login']);
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }

}
