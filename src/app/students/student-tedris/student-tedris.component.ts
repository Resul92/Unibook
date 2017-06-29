import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
	
	selector: 'student-tedris',
	templateUrl: 'student-tedris.component.html'
}) 
export class StudentTedrisComponent {
	state = ['plan', 'grades', 'about'];
	currentState = this.state[0];
 	students: Student[];
	@Input() student: Student;
	@Input() currentLang;

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