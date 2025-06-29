import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchHistory } from '../models/search-history';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFact(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/fact`,{responseType: 'text' as 'json'});
  }

  getNewGif(query: string): Observable<{ gifUrl: string }> {
    const encodedQuery = encodeURIComponent(query);
    return this.http.get<{ gifUrl: string }>(`${this.baseUrl}/gif?query=${encodedQuery}`);
  }

  getHistory(): Observable<SearchHistory[]> {
    return this.http.get<SearchHistory[]>(`${this.baseUrl}/history`);
  }
}
