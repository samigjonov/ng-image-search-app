import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SearchReducer, MainReducer } from './core/store/reducer';
import { MainEffects, SearchEffects } from './core/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbTooltipModule,
    StoreModule.forRoot({search: SearchReducer, main: MainReducer}),
    EffectsModule.forRoot([SearchEffects, MainEffects]),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
