import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';

@Component({
	
	selector: 'teacher-profile',
	templateUrl: 'teacher-profile.component.html'
}) 

export class TeacherProfileComponent {
	state = ['about', 'tedris'];
	currentState = this.state[0];
	teacher: Teacher;
 	teachers: Teacher[];
 	university: University;

	constructor(
		private universityService: UniversityService,
		private teacherService: TeacherService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.teacherService.getRealTeacherById(id)
			.then(teacher => {
				this.teacher = teacher;
				console.log('this teacher: ', this.teacher);
			});
		});
	}
	goto(state): void {
		this.currentState = state;
	}
}