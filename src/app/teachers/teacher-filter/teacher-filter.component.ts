import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TeacherFilterProperty } from '../../shared/teacher-filter-property.model';
import { ModalDirective } from 'ngx-bootstrap/ng2-bootstrap';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';

@Component({
	
	selector: 'teacher-filter',
	templateUrl: 'teacher-filter.component.html',
	animations: [
		trigger('slideToggle', [
			
			state('hide', style({
				height: '40px'
			})),
			state('show', style({
				height: '*'
			})),

			transition('hide <=> show', animate('300ms')),

		]),
	]
})
export class TeacherFilterComponent { 
	@Input () 
	teacherFilterProperties: TeacherFilterProperty;
	@Input() universities: University[];
	@Input() university: University;

	@Output() 
	select = new EventEmitter();
	faculties: any[];
	uni_id: any;
	faculty_id: any;

	@ViewChild('modal') public modal : ModalDirective;
	all: any[];
	selected: any;
	disabled: boolean = true;
	characters: Array<any>;
	constructor(
		private universityService: UniversityService
	) { }
	onChange(value) {
    	this.select.emit(value)
	}
	showModal(){
		this.modal.show();
	}
	getFacultiesByUniversityId(uni_id) {
		var array2 = [];


		this.universityService.getRealFacultyById(uni_id).then(faculties => {
			faculties.data.forEach(faculty => {
				var obj2 = {
					value: faculty.id,
					label: faculty.name.az
				}
				array2.push(obj2);
			});
			this.faculties = array2;
		});

		this.disabled = false;
	}

	setOrgId(uni_id, faculty_id) {
		let emitter = {
			uni_id: uni_id,
			faculty_id: faculty_id
		}
		this.select.emit(emitter);
		this.modal.hide();	
	}
}