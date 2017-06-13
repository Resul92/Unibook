import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/ng2-bootstrap';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';
@Component({
	selector: 'teacher-filter',
	styleUrls: ['teacher-filter.component.css'],
	templateUrl: 'teacher-filter.component.html'
})
export class TeacherFilterComponent implements OnInit { 
	@Input() universities: University[];
	@Input() university: University;
	@Output() 
	select = new EventEmitter();
	@ViewChild('modal') public modal : ModalDirective;
	faculties: any[];
	uni_id: any;
	faculty_id: any;
	all: any[];
	selected: any;
	disabled: boolean = true;
	characters: Array<any>;
	constructor(
		private universityService: UniversityService
	) { }
	ngOnInit(){
		console.log('universities in filter: ', this.universities);
	}
	onChange(value) {
    	this.select.emit(value)
	}
	showModal(){
		this.modal.show();
	}
	getFacultiesByUniversityId(uni_id) {
		console.log('getFacultiesByUniversityId: ', uni_id);
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