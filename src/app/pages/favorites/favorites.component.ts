import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MainState } from '../../core/models/state.model';
import { List } from '../../core/models/list.model';
import { SwalService } from '../../core/services/swal.service';
import { ClearError, ClearSuccess, FetchLists, UpdateList } from '../../core/store/actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Image } from '../../core/models/image.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {
  public lists: List[];
  public selectedListId: string;
  public selectedList: List;
  public listForm: FormGroup;
  public images: Image[];

  public constructor(private store: Store<{ main: MainState }>, private swalService: SwalService) {
    store.pipe(select('main')).subscribe(state => {
      this.lists = state.lists;
      if (state.success) {
        this.swalService.showBasicAlert({message: state.success});
        this.store.dispatch(new ClearSuccess());
      }
      if (state.error) {
        this.swalService.showErrorAlert({message: state.error});
        this.store.dispatch(new ClearError());
      }
    });
    this.listForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(new FetchLists());
  }

  public loadListDetails() {
    this.selectedList = this.lists.find(item => item.id === this.selectedListId);
    this.images = this.selectedList.images;
    this.listForm.patchValue({
      title: this.selectedList.title,
      description: this.selectedList.description
    });
  }

  public updateList() {
    this.selectedList = {
      ...this.selectedList,
      ...this.listForm.getRawValue()
    };
    this.store.dispatch(new UpdateList(this.selectedList));
  }

  public getDownloadUrl(image: Image) {
    return `https://unsplash.com/photos/${image.id}/download?force=true`;
  }

}
