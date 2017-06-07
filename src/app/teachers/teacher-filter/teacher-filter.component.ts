import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeacherFilterProperty } from '../../shared/teacher-filter-property.model';

@Component({
	
	selector: 'teacher-filter',
	templateUrl: 'teacher-filter.component.html'
})
export class TeacherFilterComponent { 
	@Input () 
	teacherFilterProperties: TeacherFilterProperty;

	@Output() 
	select = new EventEmitter();

	onChange(value) {
    	this.select.emit(value)
	}
}