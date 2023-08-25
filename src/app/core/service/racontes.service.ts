import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raconte } from '../model/raconte.model';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class raconteService {
  constructor(private http: HttpClient) {}

  getAllRacontes(): Observable<any> {
    return this.http
      .get<any>('http://localhost:1337/api/articles?populate=*')
      .pipe(map((value) => value.data));
  }
  getRaconteById(raconteId: number): Observable<any> {
    return this.http
      .get<any>(`http://localhost:1337/api/articles/${raconteId}?populate=*`)
      .pipe(map((value) => value.data));
  }
}
