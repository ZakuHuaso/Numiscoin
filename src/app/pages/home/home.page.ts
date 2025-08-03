import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { CommonModule } from "@angular/common"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import { settingsOutline, personOutline, locationOutline, bookmarkOutline } from "ionicons/icons"

// Register Swiper modules
import { register } from "swiper/element/bundle"
register()

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  userName = "Guido"
  totalResults = 21

  statistics = [
    { value: "140", label: "Ventas" },
    { value: "20", label: "Colecciones" },
    { value: "1,980", label: "Items" },
  ]

  upcomingEvents = [
    {
      id: 1,
      title: "Convención Madrid 2024",
      subtitle: "Julio, 1 Sábado",
      image: "assets/images/welcome1.png",
      category: "MADRID 2024",
    },
    {
      id: 2,
      title: "Feria Barcelona 2024",
      subtitle: "Agosto, 15 Jueves",
      image: "/placeholder.svg?height=200&width=300",
      category: "BARCELONA 2024",
    },
    {
      id: 3,
      title: "Exposición Valencia",
      subtitle: "Septiembre, 10 Martes",
      image: "/placeholder.svg?height=200&width=300",
      category: "VALENCIA 2024",
    },
  ]

  recentItems = [
    {
      id: 1,
      title: "CONSTANTINO I, ROMA",
      subtitle: "Caracalla D.AVGVSTVS del emperador",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      title: "TRAJANO, ROMA",
      subtitle: "Denario de plata del emperador",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  constructor() {
    addIcons({ settingsOutline, personOutline, locationOutline, bookmarkOutline })
  }

  navigateToProfile() {
    console.log("Navigating to Profile Page")
  }

  navigateToSettings() {
    console.log("Navigating to Settings Page")
  }

  onSearch(event: any) {
    console.log("Search:", event.detail.value)
  }
}
