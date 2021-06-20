import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../../models/product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(environment.apiURL).pipe(retry(3), catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		// Return an observable with a user-facing error message.
		return throwError('Something bad happened; please try again later.');
	}
}
