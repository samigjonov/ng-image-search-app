import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { of } from 'rxjs/internal/observable/of';
import { Image } from '../models/image.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  public constructor() {

  }

  public post(list: List) {
    const currentList = this.retrieveList();
    if (currentList.findIndex(item => list.title === item.title) !== -1) {
      return throwError('List with such title already exists');
    }
    const newList = [...currentList, {...list, id: new Date().getTime().toString(), images: []}];
    localStorage.setItem('lists', JSON.stringify(newList));
    return of({message: 'success'});
  }

  public get() {
    let result = [];
    try {
      result = this.retrieveList();
    } catch (e) {
    }
    return of(result);
  }

  public put(list: List) {
    const currentList = this.retrieveList();
    if (currentList.findIndex(item => list.title === item.title) !== -1) {
      return throwError('List with such title already exists');
    }
    const updatingItemIndex = currentList.findIndex(item => item.id === list.id);
    currentList[updatingItemIndex] = list;
    localStorage.setItem('lists', JSON.stringify(currentList));
    return of(currentList);
  }

  public addToList(listId: string, image: Image) {
    const currentList = this.retrieveList();
    const selectedList = this.retrieveList().findIndex(list => list.id === listId);
    const images = currentList[selectedList].images;
    if (images.findIndex(item => image.id === item.id) !== -1) {
      return throwError('Image already added to the list');
    }
    images.push(image);
    localStorage.setItem('lists', JSON.stringify(currentList));
    return of(currentList);
  }


  public retrieveList(): List[] {
    try {
      const lists = localStorage.getItem('lists');
      if (lists === null) {
        return [];
      }
      return JSON.parse(lists);
    } catch (e) {
      localStorage.removeItem('lists');
      return [];
    }
  }

}
