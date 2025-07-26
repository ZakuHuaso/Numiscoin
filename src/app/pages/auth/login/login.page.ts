import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonButton,
  IonInput,
  IonButtons,
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
    IonButtons,
    IonItem,
    IonText,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}



}
