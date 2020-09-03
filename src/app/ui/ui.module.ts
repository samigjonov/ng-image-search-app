import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ImagesRendererComponent } from './images-renderer/images-renderer.component';
import { AddFavoriteModalComponent } from './add-favorite-modal/add-favorite-modal.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LoadingWrapperComponent } from './loading-wrapper/loading-wrapper.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NgxMasonryModule,
    NgbModule,
    CommonModule,
    NgbModalModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    ImagesRendererComponent,
    AddFavoriteModalComponent
  ],
  declarations: [
    SearchComponent,
    ImagesRendererComponent,
    AddFavoriteModalComponent,
    LoadingWrapperComponent
  ],
  providers: []
})

export class UiModule {
}
