import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';
import { University } from '../../shared/university.model';

@Component({
	
	selector: 'teacher-header',
	templateUrl: 'teacher-header.component.html'
}) 
export class TeacherHeaderComponent {
	@Input() 
	teacher: Teacher;
	@Input() 
	university: University;
	@Input()
	currentState;
	@Input() currentLang;

}