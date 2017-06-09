import { Component, EventEmitter, Input, Output, OnInit, ElementRef, AfterViewInit, OnChanges  } from '@angular/core';
import { University } from '../../shared/university.model';
import { UserService } from '../../shared/user.service';

declare var $:any;
declare var Select2;
declare var select2;

@Component({
	
	selector: 'university-aside',
	templateUrl: 'university-aside.component.html'
})
export class UniversityAsideComponent implements OnInit, AfterViewInit, OnChanges { 
	constructor(public userService: UserService) {}

	@Input() university: University;
	@Input() currentState: string;
	@Input() currentModuleId: string;

	@Output() 
	select = new EventEmitter();

	onChange(value) {
    	this.select.emit(value)
	}
	@Output() gotoDetail = new EventEmitter<string>();
	@Output() filterStudents = new EventEmitter<{}>();
	@Output() filterTeachers = new EventEmitter<{}>();
	currentFilter;
	maleChecked;
	femaleChecked;
	subModules: Array<any>;

	ngOnInit() {
		let maleChecked = true;
		let femaleChecked = true;
		this.userService.getModules().then(mods => this.subModules = mods.json().data.filter(module => module.parentId === this.currentModuleId));
	}
	ngAfterViewInit() {
		// checking if the current state has initialised
		if (this.currentState){
			//the element will only be created at the appropriate
			if (this.currentState =='students-list' || this.currentState == 'teachers-list'){
	    		$(".student-faculty").select2();
	    	}			
		}
	}
	ngOnChanges(){
		this.userService.getToken().then(token => {
			console.log('currentModuleId: ', this.currentModuleId);
			this.userService.getModules().then(mods => {
				this.subModules = this.mapModules(mods.json().data.filter(module => module.parentId === this.currentModuleId), token);
				console.log('submodules list: ', this.subModules);
			});			
		});
	}
    mapModules(mods, token): Array<any>{
       // console.log('response.json().data: ',response.json().data);
       console.log('mapModules response: ', mods);
       return mods.map(mod => this.toModule(mod));
    }
    toModule(r:any): any{
        let mod = {
            name: r.name.az,
            id : r.id
        }
        //console.log(mod.name, mod.id);
        return mod;
    }
	toggleFemale() {
		this.femaleChecked = !this.femaleChecked;
		if (this.currentState == "students-list") {
			this.filterStudentsBy('gender', this.genderFilter());
		} else if (this.currentState == "teachers-list"){
			this.filterTeachersBy('gender', this.genderFilter());
		}
	}
	toggleMale() {
		this.maleChecked = !this.maleChecked;
		if (this.currentState == "students-list") {
			this.filterStudentsBy('gender', this.genderFilter());
		} else if (this.currentState == "teachers-list"){
			this.filterTeachersBy('gender', this.genderFilter());
		}
	}
	genderFilter() {
		if (this.femaleChecked && this.maleChecked) {
			return 'all';
		} else if (this.femaleChecked) {
			return 'qadin';
		} else if (this.maleChecked) {
			return 'kishi';
		}
	}
	goChild(child){
		this.gotoDetail.emit(child);
	}
	sortBy(property: string): void {
		if (this.university.departments){
			console.log('sortBy in the dashboard component started, trying to sort by: ', property);
			this.university.departments.sort(this.dynamicSort(property));
		}
	}
	filterStudentsBy(property, value){
		this.currentFilter = value;
		this.filterStudents.emit({property, value});
	}
	filterTeachersBy(property, value){
		this.currentFilter = value;
		this.filterTeachers.emit({property, value});
	}
	dynamicSort(property: string) {
	    var sortOrder = 1;
	    if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
	    return function (a,b) {
	        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
	    }
	}
}