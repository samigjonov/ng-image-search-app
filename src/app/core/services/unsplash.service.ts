import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {
  public readonly publicAPI = this.authService.publicAuthenticate();

  public constructor(private authService: AuthService) {

  }

  public searchImages(query: string, pageIndex: number = 1, perPage: number = 20): Observable<any> {
    return from(this.publicAPI.search.photos(query, pageIndex, perPage).then(response => response.json()));
  }
}
