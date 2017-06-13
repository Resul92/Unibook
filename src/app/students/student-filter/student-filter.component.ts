import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StudentFilterProperty } from '../../shared/student-filter-property.model';
import { University } from '../../shared/university.model';

@Component({
	
	selector: 'student-filter',
	templateUrl: 'student-filter.component.html'
})
export class StudentFilterComponent { 
	@Input () 
	studentFilterProperties: StudentFilterProperty;
	@Input() university: University;
	@Input() universities: University[];

	@Output() 
	select = new EventEmitter();

	onChange(value) {
    	this.select.emit(value)
	}
}