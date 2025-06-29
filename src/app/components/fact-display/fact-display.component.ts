import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fact-display',
  templateUrl: './fact-display.component.html',
  styleUrls: ['./fact-display.component.scss']
})
export class FactDisplayComponent {
  @Input() fact: string = '';
  @Output() refreshGif = new EventEmitter<void>();

  onRefreshGif(): void {
    this.refreshGif.emit();
  }
}
