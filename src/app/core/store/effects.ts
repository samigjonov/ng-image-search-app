import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as ActionTypes from './actions';
import { UnsplashService } from '../services/unsplash.service';
import { AddImageDone, ErrorOccurred, FetchListsDone, LoadingDone, SearchDone } from './actions';
import { ListService } from '../services/list.service';
import { List } from '../models/list.model';
import { Image } from '../models/image.model';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private unsplashService: UnsplashService
  ) {
  }

  @Effect()
  loadImages$ = this.actions$.pipe(
    ofType(ActionTypes.SEARCH),
    mergeMap((data: { payload: string }) =>
      this.unsplashService.searchImages(data.payload).pipe(
        map((result: any) => new SearchDone(result)),
        catchError(() => EMPTY)
      )
    )
  );
}

@Injectable()
export class MainEffects {
  constructor(
    private actions$: Actions,
    private listService: ListService
  ) {
  }

  @Effect()
  addList$ = this.actions$.pipe(
    ofType(ActionTypes.ADD_LIST),
    mergeMap((data: { payload: List }) =>
      this.listService.post(data.payload).pipe(
        map(() => new LoadingDone()),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  loadLists$ = this.actions$.pipe(
    ofType(ActionTypes.FETCH_LISTS),
    mergeMap(() =>
      this.listService.get().pipe(
        map((result: List[]) => new FetchListsDone(result)),
        catchError(() => EMPTY)
      )
    )
  );


  @Effect()
  addImage$ = this.actions$.pipe(
    ofType(ActionTypes.ADD_IMAGE),
    mergeMap((data: { payload: { listId: string, image: Image } }) =>
      this.listService.addToList(data.payload.listId, data.payload.image).pipe(
        map((result: List[]) => new AddImageDone(result)),
        catchError((error) => {
          return of({
            type: ActionTypes.ERROR_OCCURRED,
            payload: error
          });
        })
      )
    )
  );
}
