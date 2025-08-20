import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private baseUrl = `${environment.apiUrl}/coins`;

  constructor(private http: HttpClient) { }

  // Obtener todas las monedas
  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.baseUrl}/getAll.php`);
  }

  // Obtener las últimas monedas agregadas (para el slider)
  getLatestCoins(limit: number = 10): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.baseUrl}/getLatest.php?limit=${limit}`);
  }

  // Obtener una moneda por ID
  getCoinById(id: number): Observable<Coin> {
    return this.http.get<Coin>(`${this.baseUrl}/get_by_id.php?id=${id}`);
  }

  // Crear una nueva moneda
  createCoin(coin: Coin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/create.php`, coin, { headers });
  }

  // Actualizar una moneda existente
  updateCoin(coin: Coin): Observable<any> {
    return this.http.put(`${this.baseUrl}/update.php`, coin);
  }

  // Eliminar una moneda por ID
  deleteCoin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${id}`);
  }

  // Filtrar monedas por pais
  getCoinsByCountryPaginated(idPais: number, limit: number, offset: number): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.baseUrl}/getByCountry.php?id_pais=${idPais}&limit=${limit}&offset=${offset}`);
  }



  // Obtener monedas de Chile paginadas
  getChileCoinsPaginated(page: number) {
    return this.http.get<Coin[]>(
      `${this.baseUrl}/getChileCoinsPaginated.php?page=${page}`
    );
  }
}
