import { Component } from '@angular/core';
import { Image } from '../../core/models/image.model';
import { UnsplashService } from '../../core/services/unsplash.service';
import { Store, select } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFavoriteModalComponent } from '../add-favorite-modal/add-favorite-modal.component';
import { SearchState } from '../../core/models/state.model';

@Component({
  selector: 'app-images-renderer',
  templateUrl: './images-renderer.component.html',
  styleUrls: ['./images-renderer.component.scss']
})

export class ImagesRendererComponent {
  public images: Image[] = [];
  public page = 1;
  public pageSize = 20;
  public total = 0;
  public loading: boolean;

  public constructor(private unsplashService: UnsplashService, private store: Store<{ search: SearchState }>,
                     private modalService: NgbModal) {
    store.pipe(select('search')).subscribe(state => {
      this.images = state.images ? state.images.results : [];
      this.total = state.images ? state.images.total : 0;
      this.loading = state.loading;
    });
  }

  public openFavoriteModal(image: Image) {
    const openedModal = this.modalService.open(AddFavoriteModalComponent);
    openedModal.componentInstance.image = image;
    openedModal.componentInstance.modal = openedModal;
  }
}
