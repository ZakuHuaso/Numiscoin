export interface Coin {
  codigo: number; // identificador único de la moneda
  moneda: string; // Nombre de la moneda
  idPais: number; // Identificador del país
  familia: string; // Familia o categoría de la moneda
  id_familia: number; // Identificador de la familia
  id_coleccion: number; // Identificador de la colección
  ano: string; // Año de la moneda
  variante: string; // Variante de la moneda
  ceca: string; // Ceca o lugar de origen
  tipo: string; // Tipo de la moneda
  totalProducido: string; // Total de monedas producidas
  valorSinCircular: string; // Valor sin circular
  valorComercial: string; // Valor comercial
  valorAdquirido: string; // Valor adquirido
  estado: string; // Estado de la moneda
  observacion: string; // Observación o notas sobre la moneda
  foto1: string; // URL o ruta a la primera foto de la moneda
  foto2: string; // URL o ruta a la segunda foto de la moneda
  orden: number; // Orden de la moneda
  acunada: string; // Indica si la moneda está acuñada
}
