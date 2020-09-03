import { SearchResult } from './search-result.model';
import { List } from './list.model';

export interface SearchState {
  loading: boolean;
  searchTerm: string;
  images: SearchResult;
}

export interface MainState {
  loading: boolean;
  error: string;
  success: string;
  lists: List[];
}
