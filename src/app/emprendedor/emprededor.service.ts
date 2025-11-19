import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmprendedorService {

  private url: string = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json';
  
  constructor(private http: HttpClient) { }

  getEmprendedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/emprendedores.json`);
  }

  getEmprendedorDetalle(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}/emprendedor.json`);
  }
}
