import { Component, ViewChild, type ElementRef } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonActionSheet,
  IonLoading,
  IonToast,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import { arrowBack, checkmark, cameraOutline, addCircleOutline, camera, images } from "ionicons/icons"
import type { CoinFormData, Coin } from "src/app/core/models/coin.model"
import { CoinService } from "src/app/core/services/coin.service"

@Component({
  selector: "app-new-coin",
  templateUrl: "./new-coin.page.html",
  styleUrls: ["./new-coin.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonActionSheet,
    IonLoading,
    IonToast,
  ],
})
export class NewCoinPage {
  @ViewChild("fileInputFrontal") fileInputFrontal!: ElementRef<HTMLInputElement>
  @ViewChild("fileInputTrasera") fileInputTrasera!: ElementRef<HTMLInputElement>

  formData: CoinFormData = {
    nombreMoneda: "",
    pais: "",
    ano: null, 
    variante: "",
    ceca: "",
    tipo: "",
    estado: "",
    disenadorGrabador: "",
    totalProducido: null,
    valorComercial: null,
    valorAdquirido: null,
    valorSinCircular: null,
    observaciones: "",
  }

  selectedPhotoFrontal: string | null = null
  selectedPhotoTrasera: string | null = null
  currentPhotoType: "frontal" | "trasera" = "frontal"

  showActionSheet = false
  isLoading = false
  showToast = false
  toastMessage = ""
  toastColor: "success" | "danger" | "warning" = "success"

  actionSheetButtons = [
    {
      text: "Tomar Foto",
      icon: "camera",
      handler: () => {
        this.takePhoto()
      },
    },
    {
      text: "Seleccionar de Galería",
      icon: "images",
      handler: () => {
        this.selectFromGallery()
      },
    },
    {
      text: "Cancelar",
      role: "cancel",
    },
  ]

  constructor(
    private coinService: CoinService,
    private router: Router
  ) {
    addIcons({arrowBack,checkmark,cameraOutline,addCircleOutline,camera,images,});
  }

  get isFormValid(): boolean {
    const isValid = !!(
      this.formData.nombreMoneda.trim() &&
      this.formData.pais &&
      this.formData.ano && 
      this.formData.tipo &&
      this.formData.estado
    )
    console.log('Form validation:', isValid, this.formData)
    return isValid
  }

  selectPhoto(type: "frontal" | "trasera") {
    this.currentPhotoType = type
    this.showActionSheet = true
  }

  takePhoto() {
    this.showToastMessage("La función de cámara no está implementada en este demo.", "warning")
  }

  selectFromGallery() {
    if (this.currentPhotoType === "frontal") {
      this.fileInputFrontal.nativeElement.click()
    } else {
      this.fileInputTrasera.nativeElement.click()
    }
  }

  onPhotoSelected(event: any, type: "frontal" | "trasera") {
    const file = event.target.files[0]
    if (file) {
      if (!file.type.startsWith("image/")) {
        this.showToastMessage("Por favor selecciona una imagen válida", "danger")
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        this.showToastMessage("La imagen debe ser menor a 5MB", "danger")
        return
      }

      if (type === "frontal") {
        this.formData.imagenFrontal = file
      } else {
        this.formData.imagenTrasera = file
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        if (type === "frontal") {
          this.selectedPhotoFrontal = e.target?.result as string
        } else {
          this.selectedPhotoTrasera = e.target?.result as string
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Función simplificada para testing
  async createCoin() {
    console.log('createCoin() called')
    console.log('Form data:', this.formData)
    console.log('Form valid:', this.isFormValid)

    // Test básico - solo mostrar toast
    this.showToastMessage("Función createCoin ejecutada correctamente", "success")

    if (!this.isFormValid) {
      this.showToastMessage("Por favor completa todos los campos obligatorios", "danger")
      return
    }

    this.isLoading = true

    try {
      // Preparar datos básicos para la API
      const coinData = {
        moneda: this.formData.nombreMoneda,
        id_pais: this.mapCountryToId(this.formData.pais),
        familia: "General",
        id_familia: 1,
        id_coleccion: 1,
        ano: this.formData.ano?.toString() || "",
        variante: this.formData.variante || "",
        ceca: this.formData.ceca || "",
        tipo: this.formData.tipo,
        disenador: this.formData.disenadorGrabador || "",
        totalProducido: this.formData.totalProducido?.toString() || "0",
        valorSinCircular: this.formData.valorSinCircular?.toString() || "0",
        valorComercial: this.formData.valorComercial?.toString() || "0",
        valorAdquirido: this.formData.valorAdquirido?.toString() || "0",
        estado: this.formData.estado,
        observaciones: this.formData.observaciones || "",
        foto1: "", // Por ahora vacío
        foto2: "", // Por ahora vacío
        orden: 0,
        acunada: "Si"
      }

      console.log('Sending coin data:', coinData)

      // Llamar al servicio
      const response = await this.coinService.createCoin(coinData as Coin).toPromise()
      console.log('API Response:', response)
      
      this.showToastMessage("¡Moneda creada exitosamente!", "success")
      
      // Limpiar formulario
      this.resetForm()
      
      // Navegar después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/coin'])
      }, 2000)

    } catch (error) {
      console.error('Error creating coin:', error)
      this.showToastMessage(`Error al crear la moneda: ${error}`, "danger")
    } finally {
      this.isLoading = false
    }
  }

  private mapCountryToId(country: string): number {
    const countryMap: { [key: string]: number } = {
      'argentina': 9,
      'brasil': 26,
      'chile': 38,
      'peru': 142,
      'estados-unidos': 60,
    }
    return countryMap[country] || 18
  }

  private resetForm() {
    this.formData = {
      nombreMoneda: "",
      pais: "",
      ano: null,
      variante: "",
      ceca: "",
      tipo: "",
      estado: "",
      disenadorGrabador: "",
      totalProducido: null,
      valorComercial: null,
      valorAdquirido: null,
      valorSinCircular: null,
      observaciones: "",
    }
    this.selectedPhotoFrontal = null
    this.selectedPhotoTrasera = null
  }

  cancelForm() {
    console.log('cancelForm() called')
    this.router.navigate(['tabs/coin'])
  }

  private showToastMessage(message: string, color: "success" | "danger" | "warning") {
    console.log('Toast message:', message, color)
    this.toastMessage = message
    this.toastColor = color
    this.showToast = true
  }
}