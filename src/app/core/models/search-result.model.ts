import { Image } from './image.model';

export interface SearchResult {
  results: Image[];
  total: number;
}
