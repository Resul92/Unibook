import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Teacher} from '../../shared/teacher.model';

declare var $: any;

@Component({
	
	selector: 'teacher-sort',
	templateUrl: 'teacher-sort.component.html'
})
export class TeacherSortComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() teachers: Teacher[];

	onChange(value) {
		console.log('onChange value in teacher-sort component that we are emitting out is :', value);
    	this.select.emit(value)
	}
}