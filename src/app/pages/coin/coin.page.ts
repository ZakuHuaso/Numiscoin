import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, add } from 'ionicons/icons';
import { Router } from '@angular/router';
import { CoinService } from 'src/app/core/services/coin.service';
import { Coin } from 'src/app/core/models/coin.model';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.page.html',
  styleUrls: ['./coin.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
  ],
})
export class CoinPage implements OnInit {
  coins: Coin[] = [];

  constructor(private router: Router, private coinService: CoinService) {
    addIcons({ arrowBack, add });
  }

  ngOnInit() {}

  addCoin() {
    this.router.navigateByUrl('/new-coin');
  }

  goToFilteredCollection(id_pais: number) {
    this.router.navigate(['tabs/collection/collection-filtered', id_pais]);
  }

  onSelectCountry(id_pais: number) {
    this.router.navigate(['tabs/collection/filtered'], {
      queryParams: { id_pais: id_pais },
    });
  }

  /* 
  ngOnInit() {
    this.loadCoins();
  }

  loadCoins() {
    this.coinService.getCoins().subscribe({
      next: (res) => (this.coins = res),
      error: (err) => console.error('Error al obtener monedas', err),
    });
  }
    */
}
