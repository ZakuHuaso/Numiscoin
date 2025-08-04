export interface Coin {
  codigo: number; // Unique identifier for the coin
  moneda: string; // Name of the coin
  idPais: number; // Identifier for the country
  familia: string; // Family or category of the coin
  id_familia: number; // Identifier for the family
  id_coleccion: number; // Identifier for the collection
  ano: string; // Year of the coin
  variante: string; // Variant of the coin
  ceca: string; // Mint or place of origin
  tipo: string; // Type of the coin
  totalProducido: string; // Total produced coins
  valorSinCircular: string; // Value without circulation
  valorComercial: string; // Commercial value
  valorAdquirido: string; // Acquired value
  estado: string; // Condition of the coin
  observacion: string; // Observation or notes about the coin
  foto1: string; // URL or path to the first photo of the coin
  foto2: string; // URL or path to the second photo of the coin
  orden: number; // Order of the coin
  acunada: string; // Indicates if the coin is minted
}
