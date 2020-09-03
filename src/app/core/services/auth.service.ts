import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';

const APP_ACCESS_KEY = 'xscGuCz-9i6DhobD8x7awSqBY6Y3nDmy6w5x5LJrP7U';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public constructor() {
  }

  public publicAuthenticate(): Unsplash {

    return new Unsplash({
      accessKey: APP_ACCESS_KEY
    });
  }

}
