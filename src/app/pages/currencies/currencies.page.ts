import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.page.html',
  styleUrls: ['./currencies.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonText,
    CommonModule,
    FormsModule,
  ],
})
export class CurrenciesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
