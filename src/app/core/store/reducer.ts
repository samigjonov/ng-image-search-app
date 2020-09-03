// importing Actions
import * as ActionTypes from './actions';
import { SearchState, MainState } from '../models/state.model';

const searchInitialState: SearchState = {
  loading: false,
  searchTerm: '',
  images: null,
};

export function SearchReducer(state = searchInitialState, action: ActionTypes.SearchActions): SearchState {
  switch (action.type) {
    case ActionTypes.SEARCH: {
      return {
        ...state,
        loading: true,
        searchTerm: action.payload
      };
    }
    case ActionTypes.SEARCH_DONE: {
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    }
    default: {
      return state;
    }

  }
}

const mainInitialState: MainState = {
  loading: false,
  error: null,
  success: null,
  lists: []
};

export function MainReducer(state = mainInitialState, action: ActionTypes.MainActions) {
  switch (action.type) {
    case ActionTypes.ADD_LIST: {
      const updatedList = [...state.lists, action.payload];
      return {
        ...state,
        loading: true,
        lists: updatedList
      };
    }
    case ActionTypes.FETCH_LISTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.FETCH_LISTS_DONE: {
      return {
        ...state,
        loading: false,
        lists: action.payload
      };
    }
    case ActionTypes.LOADING_DONE: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.ADD_IMAGE: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.ADD_IMAGE_DONE: {
      return {
        ...state,
        loading: false,
        success: 'Images successfully added',
        lists: action.payload
      };
    }
    case ActionTypes.ERROR_OCCURRED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case ActionTypes.CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case ActionTypes.CLEAR_SUCCESS: {
      return {
        ...state,
        success: null,
      };
    }
    default: {
      return state;
    }
  }
}
