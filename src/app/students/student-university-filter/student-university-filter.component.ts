import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Student} from '../../shared/student.model';

declare var $: any;

@Component({
	
	selector: 'student-university-filter',
	templateUrl: 'student-university-filter.component.html'
})
export class StudentUniversityFilterComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() students: Student[];

	onChange(value) {
		console.log('onChange value in student-filter component that we are emitting out is :', value);
    	this.select.emit(value)
	}
}