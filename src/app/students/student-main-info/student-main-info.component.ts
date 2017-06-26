import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-main-info',
	templateUrl: 'student-main-info.component.html'
}) 
export class StudentMainInfoComponent {
	@Input() student: Student;
	@Input() currentLang;

}