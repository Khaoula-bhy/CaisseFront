import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }
  
  getProduitList(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}/produit/all`);

  }
  public getProduitById(id:number):Observable<Produit>{
    return this.http.get<Produit>(`${this.baseUrl}/produit/${id}`)
  }

  postProduit(produit:Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.baseUrl}/produit/add`,produit);

  }
  public updateProduit(produit:Produit): Observable<Produit>{
    return this.http.put<Produit>(`${this.baseUrl}/produit/update`,produit);

  }

  
}
