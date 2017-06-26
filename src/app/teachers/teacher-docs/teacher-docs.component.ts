import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-docs',
	templateUrl: 'teacher-docs.component.html'
}) 
export class TeacherDocsComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}