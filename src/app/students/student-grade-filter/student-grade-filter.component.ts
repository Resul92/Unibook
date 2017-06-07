import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-grade-filter',
	templateUrl: 'student-grade-filter.component.html'
}) 
export class StudentGradeFilterComponent {
	@Input() student: Student;

}