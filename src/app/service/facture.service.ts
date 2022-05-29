import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facture } from '../model/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  getFacturesList(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.baseUrl}/facture/all`);

  }
  
}
