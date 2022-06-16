import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from 'src/app/interfaces/crud.interface';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements Crud<Pokemon>{

  constructor(private http: HttpClient) { }

  create(item: Pokemon): Observable<Pokemon> {
    item.idAuthor = 1;
   return this.http.post<Pokemon>(`${environment.apiUrl}`, item);
  }
  update(item: Pokemon): Observable<Pokemon> {
    item.idAuthor = 1;
   return this.http.put<Pokemon>(`${environment.apiUrl}${item.id}`, item);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<any>(`${environment.apiUrl}${id}`);
  }
  getAll(): Observable<Pokemon[]> {
   return this.http.get<Pokemon[]>(`${environment.apiUrl}?idAuthor=1`);
  }
  getById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.apiUrl}${id}`);
  }

  getNRecord(n: number): Observable<Pokemon[]> {
    //El endpoint no tiene una función para obtener n registros
    return this.http.get<Pokemon[]>(`${environment.apiUrl}?idAuthor=1&limit=${n}`);
  }
}
