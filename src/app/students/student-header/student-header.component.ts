import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';
import { University } from '../../shared/university.model';

@Component({
	
	selector: 'student-header',
	templateUrl: 'student-header.component.html'
}) 
export class StudentHeaderComponent {
	@Input() 
	student: Student;
	@Input() 
	university: University;
	@Input()
	currentState;
	@Input() currentLang;

}