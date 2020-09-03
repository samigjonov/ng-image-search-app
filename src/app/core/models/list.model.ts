import { Image } from './image.model';

export interface List {
  id?: string;
  title: string;
  description?: string;
  images?: Image[];
}
