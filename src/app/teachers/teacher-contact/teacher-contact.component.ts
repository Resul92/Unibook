import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-contact',
	templateUrl: 'teacher-contact.component.html'
}) 
export class TeacherContactComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}