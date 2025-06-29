import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchHistory } from '../models/search-history';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FactGifService {
  private currentFactSubject = new BehaviorSubject<string | null>(null);
  private currentUrlSubject = new BehaviorSubject<string | null>(null);
  private historySubject = new BehaviorSubject<SearchHistory[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public currentFact$ = this.currentFactSubject.asObservable();
  public currentUrl$ = this.currentUrlSubject.asObservable();
  public history$ = this.historySubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();

  constructor(private apiService: ApiService) {}

  loadNewFact(): void {
    this.loadingSubject.next(true);
    this.apiService.getFact().subscribe({
      next: (response) => {
        this.currentFactSubject.next(response);
        this.loadingSubject.next(false);
        this.refreshGif();
      },
      error: (error) => {
        console.error('Error loading fact:', error);
        this.loadingSubject.next(false);
      }
    });
  }

  refreshGif(): void {
    const currentFact = this.currentFactSubject.value;
    if (!currentFact) return;

    this.loadingSubject.next(true);
    this.apiService.getNewGif(currentFact).subscribe({
      next: (response) => {
        this.currentUrlSubject.next(response.gifUrl);
        this.loadingSubject.next(false);
      },
      error: (error) => {
        console.error('Error refreshing gif:', error);
        this.loadingSubject.next(false);
      }
    });
  }

  loadHistory(): void {
    this.apiService.getHistory().subscribe({
      next: (history) => {
        this.historySubject.next(history);
      },
      error: (error) => {
        console.error('Error loading history:', error);
      }
    });
  }

  getCurrentFact(): string | null {
    return this.currentFactSubject.value;
  }
}
