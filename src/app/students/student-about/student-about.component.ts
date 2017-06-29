import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
	
	selector: 'student-about',
	templateUrl: 'student-about.component.html'
}) 
export class StudentAboutComponent implements OnInit {
	state = ['bio', 'contact', 'docs', 'main-info', 'plan', 'grades'];
	currentState = this.state[0];
	@Input() student: Student;
	@Input() currentLang;

 	students: Student[];

	constructor(
		private studentService: StudentService,
		private route: ActivatedRoute,
		private router: Router) {}
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.studentService.getStudentById(id)
			.then(student => this.student = student);
		});
	}
	goto(state) {
		this.currentState = state;
	}
}
