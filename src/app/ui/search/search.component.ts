import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
import { Search } from '../../core/store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;

  public constructor(private store: Store) {
  }

  public ngOnInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup') // Create an observable from input keyup events
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap((query: string) => this.store.dispatch(new Search({query})),
        )).subscribe();
  }
}
