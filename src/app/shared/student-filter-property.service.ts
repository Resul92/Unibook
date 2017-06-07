import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StudentFilterProperty } from './student-filter-property.model';

@Injectable()
export class StudentFilterPropertyService {
	private studentsFilterPropertyUrl = 'app/studentFilterProperties'; // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getStudentFilterProperties(): Promise<StudentFilterProperty[]> {
		return this.http.get(this.studentsFilterPropertyUrl)
			.toPromise()
			.then(response => response.json().data as StudentFilterProperty[])
			.catch(this.handleError);
	} 
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}