import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-plan-panel',
	templateUrl: 'student-plan-panel.component.html'
}) 
export class StudentPlanPanelComponent {
	@Input() student: Student;
	@Input() currentLang;
}