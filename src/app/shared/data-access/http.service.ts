import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Promo } from '../interfaces/promos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  dataUrl = 'assets/data/promos.json';

  getData(): Observable<Promo[]> {
    return this.http.get<Promo[]>(this.dataUrl);
  }
}
