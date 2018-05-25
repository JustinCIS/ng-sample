import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
    private requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    private httpClient: HttpClient;

    constructor(injector: Injector) {
        this.httpClient = injector.get(HttpClient);
    }

    /** Use to make HTML Request  */
    customGet(url: string): Observable<any> {
        type postArgsType = { headers: HttpHeaders, withCredentials: boolean };
        return this.httpClient.get(url, this.buildPostArgs())
            .pipe(
                catchError(this.handleError)
            );
    }

    /** Use to Serialize an object to Post */
    customPost(url: string, body: any): Observable<any> {
      return this.postRawPayload(url, JSON.stringify(body), false);
    }

    /** Use for JSON formatted body to Post */
    postRawPayload(url: string, body: string, isCustomError: boolean): Observable<any> {        
        return this.httpClient.post(url, body, this.buildPostArgs())
            .pipe(
                catchError(this.handleError)
            );
    }

    /** Handle HTTP Errors */
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    private buildPostArgs(): any {
        return { headers: this.requestHeaders, withCredentials: true };
    }
}
