import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';

@Component({
	
	selector: 'student-profile',
	templateUrl: 'student-profile.component.html'
}) 

export class StudentProfileComponent {
	state = ['about', 'tedris'];
	currentState = this.state[0];
	student: Student;
 	students: Student[];
 	university: University;

	constructor(
		private universityService: UniversityService,
		private studentService: StudentService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.studentService.getRealStudentById(id)
			.then(student => {
				console.log('student: ', student);
				this.student = student
			});
		});
	}
	goto(state) {
		this.currentState = state;
	}
}