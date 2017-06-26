import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-grade-panel',
	templateUrl: 'teacher-grade-panel.component.html'
}) 
export class TeacherGradePanelComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}