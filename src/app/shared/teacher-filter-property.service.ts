import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TeacherFilterProperty } from './teacher-filter-property.model';

@Injectable()
export class TeacherFilterPropertyService {
	private teachersFilterPropertyUrl = 'app/teacherFilterProperties'; // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getteacherFilterProperties(): Promise<TeacherFilterProperty[]> {
		return this.http.get(this.teachersFilterPropertyUrl)
			.toPromise()
			.then(response => response.json().data as TeacherFilterProperty[])
			.catch(this.handleError);
	} 
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}