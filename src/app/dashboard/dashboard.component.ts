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
	teacherModulesList: Array<any>;
	studentModulesList: Array<any>;

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
				console.log('this university', this.university);
			});
			this.userService.getModules().then(mods => {
				this.modules = mods.json().data.filter(module => module.parentId === 0);
				//console.log('mods receiver drom api: ', this.modules);
				//set the current view to the first module in the list
				this.currentModule = this.modules[0];
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
	loadMoreUniversities(mods?, counter?){
		console.log('loadMoreUniversities called:');
		if(counter){ this.universityPageCounter = counter};
		// need to have a counter starting at one to know how may times it was activated
		this.loading = true;
		if(mods){
			// we are just requesting things with other filters
			//setting counter to one because we are filtering universities
			this.universityPageCounter = 1;
			this.universityService.getRealUniversities(this.universityPageCounter, mods).then(universities => {
				this.universities = universities;
				this.loading = false;
			});
		} else {
			this.universityPageCounter++;
			this.universityService.getRealUniversities(this.universityPageCounter)
			.then(universities => {
				this.universities = this.universities.concat(universities);
				this.allUniversities = this.allUniversities.concat(universities);
				console.log("universities list in the dashboard:", this.universities);
				this.loading = false;
			});	
		}
	}
	loadMoreStudents(mods?, counter?){
		console.log('loadMoreStudents called with mods:', mods, counter);
		if(counter){ this.studentPageCounter = counter};
		this.loading = true;
		if(mods){
			this.studentModulesList = mods;
			this.studentPageCounter = 1;
			this.studentService.getRealStudents(this.studentPageCounter, mods).then(students => {
				this.students = students;
				this.loading = false;
			});
		} else {
			// need to have a counter starting at one to know how may times it was activated
			this.studentPageCounter++;
			this.studentService.getRealStudents(this.studentPageCounter)
			.then(students => {
				//since loading extra data breaks the view in masonry, we'll set it to empty and then load the data
				this.oldStudents = this.students;
				this.students = [];
				this.students = this.oldStudents.concat(students);
				this.allStudents = this.allStudents.concat(students);
				console.log("students list in the dashboard:", this.students);
				this.loading = false;
			});	
		}
	}
	loadMoreTeachers(mods?, counter?, id?){
		console.log('loadMoreTeachers called with mods:', mods);
		if(counter){ this.teacherPageCounter = counter};
		this.loading = true;
		if (mods) {
			this.teacherModulesList = mods;
			this.teacherPageCounter = 1;
		}
		if (counter) {
			this.teacherPageCounter = counter;
		}
		//if id is present load them from getRealTeacherById method instead of getRealTeachersMethod
		if (id){

		}else {
			//if the request sent from::
			//changes in submodules list - added or removed
			//or by filtering by uni / faculty - replace existing students with new one, no need to append
			if(mods || counter){
				// we are just requesting things with other filters
				this.teacherService.getRealTeachers(this.teacherPageCounter, this.teacherModulesList).then(teachers => {
					this.teachers = teachers;
					this.loading = false;
				});
			} else {
				// if the request comes from pagination append new students to existing ones
				this.teacherPageCounter++;
				this.teacherService.getRealTeachers(this.teacherPageCounter, this.teacherModulesList)
				.then(teachers => {
					this.teachers
					this.teachers = this.teachers.concat(teachers);
					this.allTeachers = this.allTeachers.concat(teachers);
					console.log("teachers list in the dashboard:", this.teachers);
					this.loading = false;
				});	
				// need to send additional requests to the query and push it the result to the local variale			
			}
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
		console.log('sorting students by: ', property);
		console.log('before sorting: ', this.students);
		if (this.students){
			this.helperService.sort(this.students, property);
		}
		console.log('after sorting: ', this.students);
	}
	sortTeachersBy(property: string): void {
		console.log('sorting teachers by: ', property);
		console.log('before sorting: ', this.teachers);
		if (this.teachers){
			this.helperService.sort(this.teachers, property);
		}
		console.log('after sorting: ', this.teachers);
	}
	sortUniversitiesBy(property: string): void {
		console.log('sorting universities by: ', property);
		console.log('before sorting: ', this.universities);
		console.log(this.helperService.sort(this.universities, property));
		if (this.universities){
			this.universities = this.helperService.sort(this.universities, property);
		} 
		console.log('after sorting: ', this.universities);
	}
	filterStudentsBy(property: string): void {
		console.log('filter students by: ', property);
	}
	filterTeachersBy(property: string): void {
		console.log('filter teachers by: ', property);		
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