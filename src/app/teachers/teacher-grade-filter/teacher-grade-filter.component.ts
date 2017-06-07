import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-grade-filter',
	templateUrl: 'teacher-grade-filter.component.html'
}) 
export class TeacherGradeFilterComponent {
	@Input() teacher: Teacher;

}