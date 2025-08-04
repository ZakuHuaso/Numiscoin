import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonTitle,
  IonIcon,
  IonContent,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
    IonTitle,
    IonIcon,
    IonContent,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class ProfilePage {
  // Datos del perfil del usuario
  user = {
    name: 'Guido Rojas',
    location: 'Santiago, CL',
    bio: '¡Hola! Mi nombre es Guido, soy un numismático Senior, con más de 30 años de experiencia en el mundo de la numismática y el coleccionismo.',
    email: 'guidorojasl@gmail.com',
  };

  // Estadísticas del perfil
  stats = [
    { value: '140', label: 'Ventas' },
    { value: '20', label: 'Colecciones' },
    { value: '1,980', label: 'Items' },
  ];

  // Datos del calendario de eventos
  calendar = [
    { day: 'L', date: 10 },
    { day: 'M', date: 11 },
    { day: 'M', date: 12 },
    { day: 'J', date: 13 },
    { day: 'V', date: 14 },
    { day: 'S', date: 15 },
    { day: 'D', date: 16 },
  ];

  constructor() {
    // Añade los iconos que se usarán en el componente
    addIcons({ settingsOutline, addCircle });
  }
}
