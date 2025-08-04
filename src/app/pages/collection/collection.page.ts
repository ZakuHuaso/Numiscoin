import { Component } from "@angular/core"
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
export class CollectionPage {
  isLoading = true
  recentItem: RecentItem | null = null

  constructor( private router: Router) {
    addIcons({arrowBack,add,timeOutline,imageOutline,});
  }

  onImageError(event: any) {
    event.target.src = "assets/images/placeholder-coin.png"
  }

  navigateToNewCollection() {
    this.router.navigateByUrl('/new-collection');
  }

  navigateToCoin() {
    this.router.navigateByUrl('/tabs/collection/coin');
  }
  
}
