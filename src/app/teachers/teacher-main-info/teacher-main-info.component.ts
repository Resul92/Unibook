import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-main-info',
	templateUrl: 'teacher-main-info.component.html'
}) 
export class TeacherMainInfoComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}