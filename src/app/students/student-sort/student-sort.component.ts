import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Student} from '../../shared/student.model';
declare var $:any;

@Component({
	
	selector: 'student-sort',
	templateUrl: 'student-sort.component.html'
})
export class StudentSortComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() students: Student[];

	onChangeVal(value) {
		console.log('onChange value in student-sort component that we are emitting out is :', value);
    	this.select.emit(value)
	}
    @ViewChild('sel') el:ElementRef;

}