import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-docs',
	templateUrl: 'student-docs.component.html'
}) 
export class StudentDocsComponent {
	@Input() student: Student;
	@Input() currentLang;

}