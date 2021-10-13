import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
//communicating with the backend services using http services
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  //injection
  //reusable service to use across any Angular component in the application
  getRequest(url: string): Observable<any> {
      return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  postRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.post(url, data, option)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.put(url, data, option)
    .pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
//function catchError(handleError: (error: HttpErrorResponse) => any): import("rxjs").OperatorFunction<Object, any> {
  //throw new Error('Function not implemented.');
//}

