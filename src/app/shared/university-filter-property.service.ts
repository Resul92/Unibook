import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UniversityFilterProperty } from './university-filter-property.model';

@Injectable()
export class UniversityFilterPropertyService {
	private universitysFilterPropertyUrl = 'app/universityFilterProperties'; // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getUniversityFilterProperties(): Promise<UniversityFilterProperty[]> {
		return this.http.get(this.universitysFilterPropertyUrl)
			.toPromise()
			.then(response => response.json().data as UniversityFilterProperty[])
			.catch(this.handleError);
	} 
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}