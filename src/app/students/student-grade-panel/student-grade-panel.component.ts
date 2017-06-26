import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
	
	selector: 'student-grade-panel',
	templateUrl: 'student-grade-panel.component.html'
}) 
export class StudentGradePanelComponent {
	@Input() student: Student;
	@Input() currentLang;

}