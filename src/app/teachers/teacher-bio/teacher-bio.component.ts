import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-bio',
	templateUrl: 'teacher-bio.component.html'
}) 
export class TeacherBioComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}