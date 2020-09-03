import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SearchReducer, MainReducer } from './core/store/reducer';
import { MainEffects, SearchEffects } from './core/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { UiModule } from './ui/ui.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HomeComponent
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
    UiModule,
    ReactiveFormsModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
