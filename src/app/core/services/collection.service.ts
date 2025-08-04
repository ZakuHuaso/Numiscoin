import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionsService {
  private baseUrl = 'https://numiscoin.store/api/collections';

  constructor(private http: HttpClient) {}

  // Obtener todas las colecciones
  getAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.baseUrl}/getAll.php`);
  }

  // Obtener una colección por ID
  getById(id: number): Observable<Collection> {
    return this.http.get<Collection>(`${this.baseUrl}/getById.php?id=${id}`);
  }

  // Crear una nueva colección
  create(collection: Omit<Collection, 'id_coleccion'>): Observable<any> {
    return this.http.post(`${this.baseUrl}/create.php`, collection);
  }

  // Actualizar una colección existente
  update(id: number, collection: Omit<Collection, 'id_coleccion'>): Observable<any> {
    return this.http.put(`${this.baseUrl}/update.php?id=${id}`, collection);
  }

  // Eliminar una colección
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${id}`);
  }
}
