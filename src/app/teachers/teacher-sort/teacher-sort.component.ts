import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Teacher} from '../../shared/teacher.model';
import { HelperService } from '../../shared/helper.service';

declare var $: any;

@Component({
	
	selector: 'teacher-sort',
	templateUrl: 'teacher-sort.component.html'
})
export class TeacherSortComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() teachers: Teacher[];
	constructor(private helperService: HelperService){}

	onChange(value) {
		console.log('onChange value in teacher-sort component that we are emitting out is :', value);
    	let sortedStudents = this.helperService.sort(this.teachers, value);
    	this.select.emit(sortedStudents);
	}
}