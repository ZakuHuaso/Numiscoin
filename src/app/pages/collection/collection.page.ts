import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import { arrowBack, add, timeOutline, imageOutline } from "ionicons/icons"
import { Router } from "@angular/router"
import { CoinService } from "src/app/core/services/coin.service"


export interface RecentItem {
  id: string
  title: string
  description: string
  imageUrl: string
  timestamp: Date
}

@Component({
  selector: "app-collection",
  templateUrl: "./collection.page.html",
  styleUrls: ["./collection.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class CollectionPage implements OnInit {
  isLoading = true
  recentItem: RecentItem | null = null

  constructor(private router: Router, private coinService: CoinService) {
    addIcons({ arrowBack, add, timeOutline, imageOutline })
  }

  ngOnInit() {
    this.loadRecentCoin()
  }

  loadRecentCoin() {
    this.isLoading = true
    this.coinService.getLastCoin().subscribe({
      next: (coin) => {
        if (coin) {
          this.recentItem = {
            id: coin.codigo,
            title: coin.moneda,
            description: `Diseñador: ${coin.disenador || "Desconocido"} | Valor: ${coin.valorAdquirido || "N/A"
              }`,
            imageUrl: coin.foto1,
            timestamp: new Date(), // luego podemos traer created_at desde PHP
          }
        }
        this.isLoading = false
      },
      error: (err) => {
        console.error("Error cargando última moneda:", err)
        this.isLoading = false
      },
    })
  }

  onImageError(event: any) {
    event.target.src = "assets/images/placeholder-coin.png"
  }

  navigateToNewCollection() {
    this.router.navigateByUrl("/new-collection")
  }

  navigateToCoin() {
    this.router.navigateByUrl("/tabs/collection/coin")
  }
}
