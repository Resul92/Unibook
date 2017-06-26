import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: 'teacher-plan-panel',
	templateUrl: 'teacher-plan-panel.component.html'
}) 
export class TeacherPlanPanelComponent {
	@Input() teacher: Teacher;
	@Input() currentLang;

}