import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SearchHistory } from 'src/app/models/search-history';
import { FactGifService } from 'src/app/services/fact-gif.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent {
searchHistory: SearchHistory[] = [];
  isLoading = false;
  
  private destroy$ = new Subject<void>();

  constructor(private factGifService: FactGifService) {}

  ngOnInit(): void {
    this.subscribeToHistory();
    this.loadHistory();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToHistory(): void {
    this.factGifService.history$
      .pipe(takeUntil(this.destroy$))
      .subscribe(history => {
        this.searchHistory = history;
        this.isLoading = false;
      });
  }

  loadHistory(): void {
    this.isLoading = true;
    this.factGifService.loadHistory();
  }

  trackByHistoryId(index: number, item: SearchHistory): number {
    return item.id;
  }
}
