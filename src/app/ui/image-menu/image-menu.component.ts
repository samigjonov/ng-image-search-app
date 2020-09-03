import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../../core/models/image.model';
import { AddFavoriteModalComponent } from '../add-favorite-modal/add-favorite-modal.component';

@Component({
  selector: 'app-image-menu',
  templateUrl: './image-menu.component.html',
  styleUrls: ['./image-menu.component.scss']
})

export class ImageMenuComponent {
  public modal: NgbModalRef;
  public image: Image;

  public constructor(private modalService: NgbModal) {
  }

  public openFavoriteModal(image: Image) {
    const openedModal = this.modalService.open(AddFavoriteModalComponent);
    openedModal.componentInstance.image = image;
    openedModal.componentInstance.modal = openedModal;
    this.modal.close();
  }
}
