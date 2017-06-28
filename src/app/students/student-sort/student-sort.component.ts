import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Student} from '../../shared/student.model';
import { HelperService } from '../../shared/helper.service';
declare var $:any;

@Component({
	
	selector: 'student-sort',
	templateUrl: 'student-sort.component.html'
})
export class StudentSortComponent { 
	@Output() 
	select = new EventEmitter();
 	@Input() students: Student[];
	constructor(private helperService: HelperService){}

	onChangeVal(value) {
		console.log('onChange value in student-sort component that we are emitting out is :', this.students);
    	this.select.emit(value);
	}
    @ViewChild('sel') el:ElementRef;

}