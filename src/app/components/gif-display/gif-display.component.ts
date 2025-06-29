import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-display',
  templateUrl: './gif-display.component.html',
  styleUrls: ['./gif-display.component.scss']
})
export class GifDisplayComponent {
  @Input() gifUrl: string | null = null;
  @Input() isLoading: boolean = false;

  imageError = false;

  onImageError(): void {
    this.imageError = true;
  }

  onImageLoad(): void {
    this.imageError = false;
  }
}
