import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FactGifService } from 'src/app/services/fact-gif.service';

@Component({
  selector: 'app-current-fact',
  templateUrl: './current-fact.component.html',
  styleUrls: ['./current-fact.component.scss']
})
export class CurrentFactComponent {
  currentFact: string | null = null;
  currentUrl: string | null = null;
  isLoading = false;
  
  private destroy$ = new Subject<void>();

  constructor(private factGifService: FactGifService) {}

  ngOnInit(): void {
    this.subscribeToFactChanges();
    this.subscribeToLoadingState();
    this.loadNewFact();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToFactChanges(): void {
    this.factGifService.currentFact$
      .pipe(takeUntil(this.destroy$))
      .subscribe(fact => {
        this.currentFact = fact;
      });
    this.factGifService.currentUrl$
      .pipe(takeUntil(this.destroy$))
      .subscribe(url => {
        this.currentUrl = url;
      });
  }

  private subscribeToLoadingState(): void {
    this.factGifService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => {
        this.isLoading = loading;
      });
  }

  loadNewFact(): void {
    this.factGifService.loadNewFact();
  }

  refreshGif(): void {
    this.factGifService.refreshGif();
  }
}
