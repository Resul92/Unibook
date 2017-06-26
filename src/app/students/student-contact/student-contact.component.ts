import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-contact',
	templateUrl: 'student-contact.component.html'
}) 
export class StudentContactComponent {
	@Input() student: Student;
	@Input() currentLang;

}