import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentFilterProperty } from '../../shared/student-filter-property.model';

@Component({
	
	selector: 'student-filter',
	templateUrl: 'student-filter.component.html'
})
export class StudentFilterComponent { 
	@Input () 
	studentFilterProperties: StudentFilterProperty;

	@Output() 
	select = new EventEmitter();

	onChange(value) {
    	this.select.emit(value)
	}
}