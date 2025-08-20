import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/core/services/coin.service';
import { Coin } from 'src/app/core/models/coin.model';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-filtered',
  templateUrl: './collection-filtered.page.html',
  styleUrls: ['./collection-filtered.page.scss'],
  standalone: true,
  imports: [
    CommonModule,    // Para *ngFor, *ngIf
    IonicModule,     // Para los componentes <ion-*>
    RouterModule,    // Si usas routerLink o navegación
  ],
})
export class CollectionFilteredPage implements OnInit {
  coins: Coin[] = [];
  page = 0;
  limit = 10;
  hasMore = true;
  idPais!: number;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit() {
    // 📌 Tomamos el id_pais desde los query params
    this.route.queryParams.subscribe(params => {
      this.idPais = Number(params['id_pais']);
      
      if (this.idPais) {
        this.page = 0;
        this.coins = [];
        this.hasMore = true;
        this.loadCoins();
      } else {
        console.warn("⚠️ No se recibió id_pais en la URL");
      }
    });
  }

  loadCoins(event?: any) {
    const offset = this.page * this.limit;

    this.coinService
      .getCoinsByCountryPaginated(this.idPais, this.limit, offset)
      .subscribe({
        next: (newCoins) => {
          this.coins = [...this.coins, ...newCoins];
          this.page++;

          if (newCoins.length < this.limit) {
            this.hasMore = false; // ya no hay más monedas
          }

          if (event) {
            event.target.complete();
          }
        },
        error: (err) => {
          console.error('Error al cargar monedas:', err);
          if (event) {
            event.target.complete();
          }
        },
      });
  }
}
