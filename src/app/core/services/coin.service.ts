import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin.interface';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private baseUrl = 'https://numiscoin.store/api/coins';

  constructor(private http: HttpClient) {}

  // Obtener todas las monedas
  getCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(`${this.baseUrl}/getAll.php`);
  }

  // Obtener una moneda por ID
  getCoinById(id: number): Observable<Coin> {
    return this.http.get<Coin>(`${this.baseUrl}/get_by_id.php?id=${id}`);
  }

  // Crear una nueva moneda
  createCoin(coin: Coin): Observable<any> {
    return this.http.post(`${this.baseUrl}/create.php`, coin);
  }

  // Actualizar una moneda existente
  updateCoin(coin: Coin): Observable<any> {
    return this.http.put(`${this.baseUrl}/update.php`, coin);
  }

  // Eliminar una moneda por ID
  deleteCoin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${id}`);
  }
}
