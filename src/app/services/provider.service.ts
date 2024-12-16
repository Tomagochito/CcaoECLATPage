import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private url = 'https://ccaoeclat-default-rtdb.firebaseio.com/'; // Reemplaza con tu URL

  constructor(private http: HttpClient) {}

  postContact(data: any) {
    return this.http.post(this.url, data);
  }
}
