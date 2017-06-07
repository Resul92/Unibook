import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Teacher} from '../../shared/teacher.model';

declare var $: any;

@Component({
	
	selector: 'teacher-university-filter',
	templateUrl: 'teacher-university-filter.component.html'
})
export class TeacherUniversityFilterComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() teachers: Teacher[];

	onChange(value) {
		console.log('onChange value in teacher-filter component that we are emitting out is :', value);
    	this.select.emit(value)
	}
}