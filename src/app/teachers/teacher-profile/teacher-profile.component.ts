import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';
import { UserService } from '../../shared/user.service';

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
	currentLang;

	constructor(
		private universityService: UniversityService,
		private teacherService: TeacherService,
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService
	) {}
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.teacherService.getTeacherById(id)
			.then(teacher => {
				this.teacher = teacher;
				console.log('this teacher: ', this.teacher);
			});
			this.userService.getCurrentLanguage().subscribe(currentLang => {
				console.log('currentLanguage: ', currentLang);
				this.currentLang = currentLang;
			});
		});
	}
	goto(state): void {
		this.currentState = state;
	}
}