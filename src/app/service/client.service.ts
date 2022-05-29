import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8888';

  constructor(private http: HttpClient) { }

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/client/all`);

  }
}
