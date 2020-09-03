import { Action } from '@ngrx/store';
import { SearchResult } from '../models/search-result.model';
import { List } from '../models/list.model';
import { Image } from '../models/image.model';

// Loading state
export const LOADING = 'Images Load';

// Working with Searching
export const SEARCH = 'Images Search';
export const SEARCH_DONE = 'Images Search Done';


export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: {query: string, page?: number}) {
  }
}

export class SearchDone implements Action {
  readonly type = SEARCH_DONE;

  constructor(public payload: SearchResult) {
  }
}

export type SearchActions = Search | SearchDone;

export const ADD_LIST = 'Add List';
export const ADD_LIST_DONE = 'Add List Done';
export const FETCH_LISTS = 'Fetch Lists';
export const FETCH_LISTS_DONE = 'Fetch Lists Done';
export const UPDATE_LIST = 'Update List';
export const UPDATE_LIST_DONE = 'Update List Done';
export const ADD_IMAGE = 'Add Image';
export const ADD_IMAGE_DONE = 'Add Image Done';

export const LOADING_DONE = 'Loading Done';
export const ERROR_OCCURRED = 'Error Occurred';
export const CLEAR_ERROR = 'Clear Error';
export const CLEAR_SUCCESS = 'Clear Success';

export class AddList implements Action {
  readonly type = ADD_LIST;

  constructor(public payload: List) {
  }
}

export class AddListDone implements Action {
  readonly type = ADD_LIST_DONE;

  constructor(public payload: List[]) {
  }
}

export class FetchLists implements Action {
  readonly type = FETCH_LISTS;

  constructor() {
  }
}

export class FetchListsDone implements Action {
  readonly type = FETCH_LISTS_DONE;

  constructor(public payload: List[]) {
  }
}


export class UpdateList implements Action {
  readonly type = UPDATE_LIST;

  constructor(public payload: List) {
  }
}

export class UpdateListDone implements Action {
  readonly type = UPDATE_LIST_DONE;

  constructor(public payload: List[]) {
  }
}

export class AddImage implements Action {
  readonly type = ADD_IMAGE;

  constructor(public payload: { listId: string, image: Image }) {
  }
}

export class AddImageDone implements Action {
  readonly type = ADD_IMAGE_DONE;

  constructor(public payload: List[]) {
  }
}

export class LoadingDone implements Action {
  readonly type = LOADING_DONE;

  constructor() {
  }
}

export class ErrorOccurred implements Action {
  readonly type = ERROR_OCCURRED;

  constructor(public payload: string) {
  }
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;

  constructor() {
  }
}

export class ClearSuccess implements Action {
  readonly type = CLEAR_SUCCESS;

  constructor() {
  }
}

export type MainActions =
  AddList
  | AddListDone
  | LoadingDone
  | FetchLists
  | FetchListsDone
  | AddImage
  | AddImageDone
  | ErrorOccurred
  | ClearError
  | ClearSuccess
  | UpdateList
  | UpdateListDone;
