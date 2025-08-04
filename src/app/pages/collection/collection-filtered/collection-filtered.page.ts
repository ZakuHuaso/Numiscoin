import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/core/services/coin.service';
import { Coin } from 'src/app/core/models/coin.model';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-filtered',
  standalone: true,
  imports: [
    CommonModule,    // Para *ngFor, *ngIf
    IonicModule,     // Para los componentes <ion-*>
    RouterModule,    // Si usas routerLink o navegación
  ],
  templateUrl: './collection-filtered.page.html',
  styleUrls: ['./collection-filtered.page.scss']
})
export class CollectionFilteredPage implements OnInit {
  coins: Coin[] = [];
  page = 1;
  isLoading = false;
  hasMore = true;

  baseThumbsUrl = 'https://numiscoin.store/uploads/thumbs/';

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.loadCoins();
  }

  loadCoins(event?: any) {
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    this.coinService.getChileCoinsPaginated(this.page).subscribe((data) => {
      if (data.length < 4) this.hasMore = false;
      this.coins.push(...data);
      this.page++;
      this.isLoading = false;
      event?.target.complete();
    });
  }

  onCoinClick(coin: Coin) {
    console.log('Clicked coin:', coin);
  }

  onImageError(event: any) {
    event.target.src = '/placeholder.svg';
  }

  onBackClick() {
    history.back();
  }
}
