export interface Coin {
  codigo: number; // identificador único de la moneda
  moneda: string; // Nombre de la moneda
  id_pais: number; // Identificador del país
  familia: string; // Familia o categoría de la moneda
  id_familia: number; // Identificador de la familia
  id_coleccion: number; // Identificador de la colección
  ano: string; // Año de la moneda
  variante: string; // Variante de la moneda
  ceca: string; // Ceca o lugar de origen
  tipo: string; // Tipo de la moneda
  disenador: string; // Diseñador o grabador de la moneda
  totalProducido: string; // Total de monedas producidas
  valorSinCircular: string; // Valor sin circular
  valorComercial: string; // Valor comercial
  valorAdquirido: string; // Valor adquirido
  estado: string; // Estado de la moneda
  observaciones: string; // Observación o notas sobre la moneda
  foto1: string; // URL o ruta a la primera foto de la moneda
  foto2: string; // URL o ruta a la segunda foto de la moneda
  orden: number; // Orden de la moneda
  acunada: string; // Indica si la moneda está acuñada
}


export type CoinType =
  | "moneda-corriente"
  | "moneda-conmemorativa"
  | "moneda-oro"
  | "moneda-plata"
  | "moneda-cobre"
  | "moneda-niquel"
  | "token"
  | "medalla"
  | "otros"

export type CoinCondition =
  | "pobre"
  | "regular"
  | "bueno"
  | "muy-bueno"
  | "fino"
  | "muy-fino"
  | "extremadamente-fino"
  | "sin-circular"
  | "proof"

export interface CoinFormData {
  nombreMoneda: string
  pais: string
  ano: number | null // Renamed from 'año'
  variante: string
  ceca: string
  tipo: string
  estado: string
  disenadorGrabador: string // Renamed from 'diseñadorGrabador'
  totalProducido: number | null
  valorComercial: number | null
  valorAdquirido: number | null
  valorSinCircular: number | null
  observaciones: string
  imagenFrontal?: File
  imagenTrasera?: File
}
