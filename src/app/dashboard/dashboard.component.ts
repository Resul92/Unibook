import { Component, OnInit } from '@angular/core';
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
	subModulesList: Array<any>;

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
	loadMoreUniversities(mods?){
		console.log('loadModeUniversities called:');
		// need to have a counter starting at one to know how may times it was activated
		this.loading = true;
		if(mods){
			// we are just requesting things with other filters
			//setting counter to one because we are filtering universities
			this.universityPageCounter = 1;
			this.universityService.getRealUniversities(this.universityPageCounter, mods);
		} else {
			this.universityPageCounter++;
			this.universityService.getRealUniversities(this.universityPageCounter)
			.then(universities => {
				this.loading = false;
				this.universities = this.universities.concat(universities);
				this.allUniversities = this.allUniversities.concat(universities);
				console.log("universities list in the dashboard:", this.universities);
			});	
		}
	}
	loadMoreStudents(mods?){
		console.log('loadModeStudents called with mods:', mods);
		this.loading = true;
		if(mods){
			this.studentPageCounter = 1;
			this.studentService.getRealStudents(this.studentPageCounter, mods);
		} else {
			// need to have a counter starting at one to know how may times it was activated
			this.studentPageCounter++;
			this.studentService.getRealStudents(this.studentPageCounter)
			.then(students => {
				this.loading = false;
				//since loading extra data breaks the view in masonry, we'll set it to empty and then load the data
				this.oldStudents = this.students;
				this.students = [];
				this.students = this.oldStudents.concat(students);
				this.allStudents = this.allStudents.concat(students);
				console.log("students list in the dashboard:", this.students);
			});	
		}
	}
	loadMoreTeachers(mods?){
		console.log('loadModeTeachers called with mods:', mods);
		this.loading = true;
		if(mods){
			// we are just requesting things with other filters
			this.teacherPageCounter = 1;
			this.teacherService.getRealTeachers(this.teacherPageCounter, mods);
		} else {
			// need to have a counter starting at one to know how may times it was activated
			this.teacherPageCounter++;
			this.teacherService.getRealTeachers(this.teacherPageCounter)
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
		//console.log(mods);
		let subModulesIdList = mods.map(mod => {
			if(mod.active) {return mod.id}});
		console.log('new subModules: ', subModulesIdList);
		console.log('old subModules: ', this.subModulesList);
		if(! this.subModulesList){ this.subModulesList = subModulesIdList};
		// check if it's different from before, update the relevant data...
		if(!this.helperService.arraysEqual(subModulesIdList, this.subModulesList)) {
			this.subModulesList = subModulesIdList;
			// based on current states with the modules
			console.log('setting subModules: ', subModulesIdList);
			console.log('current state: ', this.currentState);
			if(this.currentState == 'dashboard'){
				this.loadMoreUniversities(this.subModulesList.join(","));
			} else if(this.currentState == 'teachers-list'){
				console.log("have to call load more teachers");
				this.loadMoreTeachers(this.subModulesList.join(","));
			}  else if(this.currentState == 'students-list'){
				this.loadMoreStudents(this.subModulesList.join(","));
			}
		}
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