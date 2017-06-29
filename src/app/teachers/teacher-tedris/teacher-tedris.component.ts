import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';

@Component({
	
	selector: 'teacher-tedris',
	templateUrl: 'teacher-tedris.component.html'
}) 
export class TeacherTedrisComponent {
	state = ['plan', 'grades', 'about'];
	currentState = this.state[0];
 	teachers: Teacher[];
	@Input() teacher: Teacher;
	@Input() currentLang;

	constructor(
		private teacherService: TeacherService,
		private route: ActivatedRoute,
		private router: Router) {}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.teacherService.getTeacherById(id)
			.then(teacher => this.teacher = teacher);
		});
	}
	goto(state) {
		this.currentState = state;
	}
}