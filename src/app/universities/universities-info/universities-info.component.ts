import { Component, Input, OnInit, DoCheck} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { HelperService } from '../../shared/helper.service';
import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';
import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';
declare var $: any;
declare var jQuery: any;

@Component({
	
	selector: 'my-universities',
	templateUrl: "universities-info.component.html"
})

export class UniversitiesInfoComponent implements OnInit, DoCheck {
	title = 'Unibook';
	state = ['info', 'detail', 'dashboard', 'students-list', 'teachers-list'];
	currentState = this.state[1];
	teachers: Teacher[];
	students: Student[];
	oldStudentsArray;
	people;
	errorMessage: string = '';
	isLoading: boolean = true;

	constructor(
		private universityService: UniversityService,
		private helperService: HelperService,
		private studentService: StudentService,
		private teacherService: TeacherService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router) {}

	@Input()
	university: University;
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			// getting the university by its id from the server
			this.universityService.getRealUniversityById(id)
			.then(university => {
				this.university = university;
				console.log('this university: ', university);
				this.universityService.getRealUniversityStats(id)
				.then(response =>{
					console.log('uni stats: ', response);
					this.university.specialtyCount = response.specialityCount;
					this.university.departmentCount = response.departmentCount;
					//this.university.studentCount = response.studentCount;
					//this.university.teacherCount = response.teacherCount;
				});
				// getting departments / kafedras list
				this.universityService.getRealDepartmentById(id)
				.then(departments => {
					this.university.departments = departments;
					console.log('this university departments: ', departments);
				});
				// getting specialties list
				this.universityService.getRealSpecialtyById(id)
				.then(specialties => {
					this.university.specialties = specialties;
					console.log('this university specialties: ', specialties);
				});
				// getting faculty list
				this.universityService.getRealFacultyById(id)
				.then(faculties => {
					this.university.faculties = faculties;
					console.log('this university faculties: ', faculties);
				});
			});
		}); 
	}
	ngDoCheck() {
		if (this.students instanceof Array) {
			for (var i in this.students){
				if (this.students[i].courseYear !== this.oldStudentsArray[i].courseYear) {
					console.log(`change detected`);
					console.log('old students', this.oldStudentsArray);
					console.log('new students', this.students);
					this.oldStudentsArray = this.students;
					return;
				}				
			}
		}
	}
	filterTeachersByProperty(property, value){
		console.log('initializing getTeachersByProperty:', property, value);
		//this.teacherService.getTeacherByProperty(property, value);
	}
	filterStudentsByProperty(property, value){
		console.log('initializing getStudentsByProperty:', property, value);
		//this.studentService.getStudentByProperty(property, value)
		//.then(students => this.students = students);
	}
	getTeachersByProperty(property, value){
		console.log('initializing getTeachersByProperty:', property, value);
		//this.teacherService.getTeacherByProperty(property, value)
		//.then(teachers => this.teachers = teachers);
	}
	getStudentsByProperty(property, value){
		console.log('initializing getStudentsByProperty:', property, value);
		//this.studentService.getStudentByProperty(property, value)
		//.then(students => this.students = students);
	}
	navSelect(state): void {
		this.currentState = state;
	}
	sortStudentsBy(property: string): void {
		if (this.students){
			this.helperService.sort(this.students, property);
		}
		console.log('this students after sorting: ', this.students);
	}
	sortTeachersBy(property: string): void {
		if (this.teachers){
			console.log('sortBy in the universities component started, trying to sort TEACHERS by: ', property);
			this.helperService.sort(this.teachers, property);
			console.log('this teachers after sorting: ', this.teachers);
		} else {
			console.log('no teachers found');
		}
	}
	changeView(state) {
		console.log('current state is: ', this.currentState);
		this.currentState =state;
		console.log('new state is: ', this.currentState);
	}

}

