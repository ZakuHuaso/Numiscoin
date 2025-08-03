import { Component, ViewChild, type ElementRef } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import {
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
  IonLoading,
  IonToast,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import { arrowBack, checkmark, cameraOutline, addCircleOutline } from "ionicons/icons"

export interface CollectionFormData {
  title: string
  description: string
  country: string
  type: string
  photo?: File
}

@Component({
  selector: "app-new-collection",
  templateUrl: "./new-collection.page.html",
  styleUrls: ["./new-collection.page.scss"],
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
    IonLoading,
    IonToast,
  ],
})
export class NewCollectionPage {
  @ViewChild("fileInput") fileInput!: ElementRef<HTMLInputElement>

  formData: CollectionFormData = {
    title: "",
    description: "",
    country: "",
    type: "",
  }

  selectedPhoto: string | null = null
  isLoading = false
  showToast = false
  toastMessage = ""
  toastColor: "success" | "danger" | "warning" = "success"

  constructor() {
    addIcons({arrowBack,checkmark,cameraOutline,addCircleOutline,});
  }

  get isFormValid(): boolean {
    return !!(this.formData.title.trim() && this.formData.country && this.formData.type)
  }

  selectPhoto() {
    this.fileInput.nativeElement.click()
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        this.showToastMessage("Por favor selecciona una imagen válida", "danger")
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.showToastMessage("La imagen debe ser menor a 5MB", "danger")
        return
      }

      this.formData.photo = file

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        this.selectedPhoto = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  async createCollection() {
    if (!this.isFormValid) {
      this.showToastMessage("Por favor completa todos los campos requeridos", "warning")
      return
    }

    this.isLoading = true

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically:
      // 1. Upload the photo to storage (Firebase Storage, AWS S3, etc.)
      // 2. Save the collection data to your database
      // 3. Navigate back to the collections list

      console.log("Collection data:", this.formData)
      console.log("Photo file:", this.formData.photo)

      this.showToastMessage("Colección creada exitosamente", "success")

      // Reset form after successful creation
      setTimeout(() => {
        this.resetForm()
      }, 1500)
    } catch (error) {
      console.error("Error creating collection:", error)
      this.showToastMessage("Error al crear la colección", "danger")
    } finally {
      this.isLoading = false
    }
  }

  cancelForm() {
    this.resetForm()
    // Navigate back or show confirmation dialog
  }

  private resetForm() {
    this.formData = {
      title: "",
      description: "",
      country: "",
      type: "",
    }
    this.selectedPhoto = null
    if (this.fileInput) {
      this.fileInput.nativeElement.value = ""
    }
  }

  private showToastMessage(message: string, color: "success" | "danger" | "warning") {
    this.toastMessage = message
    this.toastColor = color
    this.showToast = true
  }
}
