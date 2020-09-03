import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SwalService {
  public constructor() {

  }

  public showBasicAlert(params: any = {}) {
    return Swal.fire(
      params.title ? params.title : 'Success!',
      params.message ? params.message : 'List successfully added',
      params.type ? params.type : 'success');
  }

  public showErrorAlert(params: any = {}) {
    return Swal.fire(
      'Error occurred!',
      params.message ? params.message : 'Error occurred while processing the request!',
      'error');
  }
}
