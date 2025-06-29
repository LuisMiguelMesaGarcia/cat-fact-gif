import { Component } from '@angular/core';
import { FactGifService } from 'src/app/services/fact-gif.service';
import { APP_CONSTANTS, TabType } from 'src/app/shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   title = 'Cat Facts & GIFs';
  activeTab: TabType = APP_CONSTANTS.TABS.CURRENT;
  
  readonly TABS = APP_CONSTANTS.TABS;

  constructor(private factGifService: FactGifService) {}

  ngOnInit(): void {
  }

  setActiveTab(tab: TabType): void {
    this.activeTab = tab;
    
    if (tab === this.TABS.HISTORY) {
      this.factGifService.loadHistory();
    }
  }

  isActiveTab(tab: TabType): boolean {
    return this.activeTab === tab;
  }

  loadNewFact(): void {
    this.factGifService.loadNewFact();
    this.activeTab = this.TABS.CURRENT;
  }
}
