import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';

@Component({
	
	selector: 'teacher-about',
	templateUrl: 'teacher-about.component.html'
}) 
export class TeacherAboutComponent implements OnInit {
	state = ['bio', 'contact', 'docs', 'main-info', 'plan', 'grades'];
	currentState = this.state[0];
	@Input() teacher: Teacher;

 	teachers: Teacher[];

	constructor(
		private teacherService: TeacherService,
		private route: ActivatedRoute,
		private router: Router) {}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.teacherService.getRealTeacherById(id)
			.then(teacher => this.teacher = teacher);
		});
	}
	goto(state) {
		this.currentState = state;
	}
}
