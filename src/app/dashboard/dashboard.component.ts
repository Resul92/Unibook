import { Component, OnInit, AfterViewInit } from '@angular/core';
import { University } from '../shared/university.model';
import { UniversityService } from '../shared/university.service';
import { HelperService } from '../shared/helper.service';
import { TeacherService } from '../shared/teacher.service';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';
import { Teacher } from '../shared/teacher.model';
import { Router } from '@angular/router';
import { UniversityAsideComponent } from '../universities/university-aside/university-aside.component';
import { UserService } from '../shared/user.service';
import { NavButtonDirective } from '../shared/nav-button.directive';
declare var $: any;

@Component({
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
	university: any;
	currentState = 'dashboard';
	currentModule;
	universities: University[] = [];
	student: Student;
	students: Student[] = [];
	teachers: Teacher[] = [];
	oldStudents: Student[];
	oldTeachers: Teacher[];
	oldUniversities: University[];
	oldStudentsArray;
	universityPageCounter = 0;
	studentPageCounter = 0;
	teacherPageCounter = 0;
	private user;
	allUniversities: University[] = [];
	allStudents: Student[] = [];
	allTeachers: Teacher[] = [];
	loading: Boolean;
	modules;
	currentModuleId;

	constructor(
		private userService: UserService,
		private universityService: UniversityService,
		private studentService: StudentService,
		private teacherService: TeacherService,
		private helperService: HelperService,
		private router: Router) {
	}

	ngOnInit(): void {
	// the version with the real api
		// getting user's org info
		this.userService.getCurrentUser().then(user => { 
			this.user = user;
			//console.log('current user in dashboard component: ', this.user)
			this.universityService.getRealUniversityById(this.user.structure.id)
			.then(university => {
				this.university = university;
				//console.log('this university', this.university);
			});
			this.userService.getModules().then(mods => {
				this.modules = mods.json().data.filter(module => module.parentId === 0);
				//console.log('mods receiver drom api: ', this.modules);
				this.currentModule = this.modules.find(mod => mod.id === 1000009);
				//console.log("currentModule.name.az: ", this.currentModule.name.az)
				this.currentModuleId = this.currentModule.id;
				//console.log('currentModule: ', this.currentModule);
				let currentModuleIndex = this.modules.indexOf(this.currentModule);
				//console.log('currentModuleIndex: ', currentModuleIndex);
				this.modules.splice(currentModuleIndex, 1);
				//console.log('mods in the button: ', this.modules);
				//console.log('current module: ', this.currentModule);
			});
			//console.log('current modules: ', this.modules);
		});
	}
	loadMoreUniversities(){
		// need to have a counter starting at one to know how may times it was activated
		this.loading = true;
		this.universityPageCounter++;
		this.universityService.getRealUniversities(this.universityPageCounter)
		.then(universities => {
			this.loading = false;
			this.universities = this.universities.concat(universities);
			this.allUniversities = this.allUniversities.concat(universities);
			console.log("universities list in the dashboard:", this.universities);
		});	
		// neet add method to the querying function to only ask for the necessary number of items
		// need to set the initial query to only ask for he first one
		// need to send additional requests to the query and push it the result to the local variale
	}
	loadMoreStudents(mods?){
		this.loading = true;
		if(mods){
			// we are just requesting things with other filters
			this.setSubModules = mods;
			this.teacherService.getRealTeachers(1, this.setSubModules);
		} else {
			// need to have a counter starting at one to know how may times it was activated
			this.studentPageCounter++;
			this.studentService.getRealStudents(this.studentPageCounter, this.setSubModules)
			.then(students => {
				this.loading = false;
				//since loading extra data breaks the view in masonry, we'll set it to empty and then load the data
				this.oldStudents = this.students;
				this.students = [];
				this.students = this.oldStudents.concat(students);
				this.allStudents = this.allStudents.concat(students);
				console.log("students list in the dashboard:", this.students);
			});	
			// neet add method to the querying function to only ask for the necessary number of items
			// need to set the initial query to only ask for he first one
			// need to send additional requests to the query and push it the result to the local variale
		}
	}
	loadMoreTeachers(mods?){
		this.loading = true;
		if(mods){
			// we are just requesting things with other filters
			this.setSubModules = mods;
			this.teacherService.getRealTeachers(1, this.setSubModules);
		} else {
			// need to have a counter starting at one to know how may times it was activated
			this.teacherPageCounter++;
			this.teacherService.getRealTeachers(this.teacherPageCounter, this.setSubModules)
			.then(teachers => {
				this.loading = false;
				this.teachers
				this.teachers = this.teachers.concat(teachers);
				this.allTeachers = this.allTeachers.concat(teachers);
				console.log("teachers list in the dashboard:", this.teachers);
			});	
			// need to send additional requests to the query and push it the result to the local variale			
		}
	}
	setSubModules(mods){
		// check if it's different from before, update the relevant data...
		// based on current states with the modules
		console.log('mods: ', mods);
	}
	searchUniversities(results: University[]): void {
		this.universities = results;
	}
	searchTeachers(results: Teacher[]): void {
		this.teachers = results;
	}
	searchStudents(results: Student[]): void {
		this.students = results;
	}
	gotoInfo(university: University): void { 
		let link = ['/info', university.id];
		this.router.navigate(link);
	}
	setState(mod){
		//console.log('mod is: ', mod);
		if(mod !== this.currentModule){
			this.modules.unshift(this.currentModule);
			//console.log('new currentModule is: ', mod.name.az);
			//console.log('modules:', this.modules);
			if(mod.id === 1000009){
				this.currentState = 'dashboard';
			} else if(mod.id === 1000010){
				this.currentState = 'teachers-list';
			}  else if(mod.id === 1000011){
				this.currentState = 'students-list';
			} else {
				console.log('setting to unknown module...')
				this.currentState = mod.name.az;
			}
			let currentModuleIndex = this.modules.indexOf(mod);
			//console.log('currentModuleIndex: ', currentModuleIndex);
			this.modules.splice(currentModuleIndex, 1);
			this.currentModule = mod;
			this.currentModuleId = this.currentModule.id;
			//console.log("currentModule.name.az: ", this.currentModule.name.az)
			//console.log('current modules: ', this.modules);
		} else {
			//console.log('no new module selected');
		}
	}
	sortStudentsBy(property: string): void {
		if (this.students){
			this.helperService.sort(this.students, property);
		}
	}
	sortTeachersBy(property: string): void {
		if (this.teachers){
			this.helperService.sort(this.teachers, property);
		}
	}
	sortUniversitiesBy(property: string): void {
		if (this.universities){
			this.helperService.sort(this.universities, property);
		}
	}
	filterStudentsBy(property: string, value: string): void {
		if (this.students){
			this.helperService.filter(this.students, property, value);
		}
	}
	filterTeachersBy(property: string, value: string): void {
		if (this.teachers){
			this.helperService.filter(this.teachers, property, value);
		}
	}
	filterUniversitiesBy(property: string, value: string): void {
		if (this.universities){
			this.helperService.filter(this.universities, property, value);
		}
	}
	// set the universities variable to the results returned by the university search service
	// this automatically cascades the value to the university list component
	search(results: University[]): void {
		this.universities = results;
	}
}