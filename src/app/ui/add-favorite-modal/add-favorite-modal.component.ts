import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SwalService } from '../../core/services/swal.service';
import { Store, select } from '@ngrx/store';
import { AddImage, AddList, ClearError, ClearSuccess, FetchLists } from '../../core/store/actions';
import { MainState } from '../../core/models/state.model';
import { List } from '../../core/models/list.model';
import { Image } from '../../core/models/image.model';

@Component({
  selector: 'app-add-favorite-modal',
  templateUrl: './add-favorite-modal.component.html',
  styleUrls: ['./add-favorite-modal.component.scss']
})

export class AddFavoriteModalComponent implements OnInit {
  public modal: NgbModalRef;
  public listTitle: string;
  public selectedListId = '';
  public lists: List[];
  public image: Image | any;
  public error: string;

  public constructor(private swalService: SwalService, private store: Store<{ main: MainState }>) {
    store.pipe(select('main')).subscribe(state => {
      this.lists = state.lists;
      if (state.error) {
        this.swalService.showErrorAlert({message: state.error});
        this.store.dispatch(new ClearError());
      }
      if (state.success) {
        this.swalService.showBasicAlert({message: state.success});
        this.store.dispatch(new ClearSuccess());
      }
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(new FetchLists());
  }

  public createList() {
    this.store.dispatch(new AddList({title: this.listTitle}));
    this.listTitle = null;
  }

  public addToList() {
    const castedImage: Image = {
      id: this.image.id,
      alt_description: this.image.alt_description,
      urls: {
        regular: this.image.urls.regular,
        download: this.image.links.download_location
      },
      user: {
        links: {
          html: this.image.user.links.html,
        }
      }
    };
    this.store.dispatch(new AddImage({listId: this.selectedListId, image: castedImage}));
    this.modal.close();
  }
}
