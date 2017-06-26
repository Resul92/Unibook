import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-bio',
	templateUrl: 'student-bio.component.html'
}) 
export class StudentBioComponent {
	@Input() student: Student;
	@Input() currentLang;

}