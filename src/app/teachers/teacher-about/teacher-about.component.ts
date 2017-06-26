import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';

@Component({
	
	selector: 'teacher-about',
	templateUrl: 'teacher-about.component.html'
}) 
export class TeacherAboutComponent {
	state = ['bio', 'contact', 'docs', 'main-info', 'plan', 'grades'];
	currentState = this.state[0];
	@Input() teacher: Teacher;
	@Input() currentLang;

	constructor(
		private teacherService: TeacherService,
		private route: ActivatedRoute,
		private router: Router) {}
	
	goto(state) {
		this.currentState = state;
	}
}
