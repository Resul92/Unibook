import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { University } from '../shared/university.model';
import { Student } from '../shared/student.model';
import { Teacher } from '../shared/teacher.model';

@Injectable()
export class HelperService {
	public dashboardCounter = 0;
	filter(objs, property, value) {
		return objs.filter(function (obj) {
			return obj.property == value;
		});
	}

	increaseCounter(){
		this.dashboardCounter ++;
	}
	getCounter(){
		return this.dashboardCounter;
	}

	sort(objs, property: string) {
		return objs.sort(this.dynamicSort(property));
	}

	dynamicSort(property: string) {
	    var sortOrder = 1;
	    if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
	    return function (a,b) {
	        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
	    }
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}

