import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentFactComponent } from './components/current-fact/current-fact.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { FactDisplayComponent } from './components/fact-display/fact-display.component';
import { GifDisplayComponent } from './components/gif-display/gif-display.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentFactComponent,
    SearchHistoryComponent,
    FactDisplayComponent,
    GifDisplayComponent,
    HistoryItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
