import { Component, Input } from '@angular/core';
import { SearchHistory } from 'src/app/models/search-history';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent {
 @Input() historyItem!: SearchHistory;

  imageError = false;

  onImageError(): void {
    this.imageError = true;
  }

  onImageLoad(): void {
    this.imageError = false;
  }

  openGifInNewTab(): void {
    if (this.historyItem.gifUrl && !this.imageError) {
      window.open(this.historyItem.gifUrl, '_blank');
    }
  }
}
