import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap, share } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(
    protected http: HttpClient,
    protected spinner: NgxSpinnerService
  ) { }

  get(url: string): Observable<any> {
    this.spinner.show();
    return this.http.get<any>(url).pipe(
      tap(
        (response) => {
          this.spinner.hide();
        },
        (err) => {
          this.spinner.hide();
          return throwError(err);
        }
      ));
  }

  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const options = { headers };

    return this.http.post<any>(url, body, options)
  }

  put(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const options = {
      headers,
    };
    return this.http.put<any>(url, body, options)
  }

  delete(url: string, body: any): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const options = {
      headers: headers,
      body: body
    };
    return this.http.delete<any>(url, options)
  }


  handleErrorObservable(error: Response | any) {
    return throwError(error);
  }

}
