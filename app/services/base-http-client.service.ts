import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BaseHttpClientService {

	constructor() { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}

	static readValidations(body: any): any {
		if (!body.success) {
			if (body.validations) {
				throw { data: body.data ?? null, validations: body.validations };
			} else {
				throw { error: `unhandled error :: ${body}` };
			}
		}
		return body.data;
	}
	protected extractDataFromResponse(response: any) {
		return BaseHttpClientService.readValidations(response);
	}
}
