import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiConfig } from 'src/app/config/api-config';
import { BaseHttpService } from '../base-http-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService {
  constructor(protected http: HttpClient, protected spinner: NgxSpinnerService) {
    super(http, spinner);
  }
  getUsers(page: number, pageSize: number) {
    let url = `${ApiConfig.GetUsers}?page=${page}&results=${pageSize}&seed=feed`
    return  this.get(url);
  }
}
