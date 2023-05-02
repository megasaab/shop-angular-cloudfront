import { Injectable, Injector } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { switchMap } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class ManageProductsService extends ApiService {
  constructor(injector: Injector) {
    super(injector);
  }

  uploadProductsCSV(file: File): Observable<unknown> {


    const  headers = new HttpHeaders()
        .set('Authorization', `Basic ${localStorage.getItem('auth_token')}`)


    const url = this.getUrl('import', 'import');

    const requestOptions: any = { headers, params: {
        name: file.name
      } };

    return this.http.get<any>(url,  requestOptions)
  }
}
