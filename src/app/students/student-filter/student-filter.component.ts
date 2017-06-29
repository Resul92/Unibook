import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/ng2-bootstrap';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';
@Component({
	selector: 'student-filter',
	styleUrls: ['student-filter.component.css'],
	templateUrl: 'student-filter.component.html'
})
export class StudentFilterComponent { 
	@Input() universities;
	@Output() 
	select = new EventEmitter();
	@ViewChild('modal') public modal : ModalDirective;
	faculties: any[];
	uni_id: any;
	faculty_id: any;
	selected: any;
	disabled: boolean = true;
	universityOptions;
	constructor(
		private universityService: UniversityService
	) { }
	ngOnInit(){
		//console.log('universities in filter: ', this.universities);
		this.universityOptions = this.universities.map(uni => {
			let res = {
				label: uni.name,
				value: uni.id
			};
			return res;
		});
		//console.log("universities options:", this.universityOptions);
	}
	onChange(value) {
    	this.select.emit(value)
	}
	getFacultiesByUniversityId(id){
		//console.log('getting faculties by university id: ', id);
		this.disabled = true;
		this.uni_id = id;
		this.universityService.getFacultyById(id).then( faculties => {
			this.faculties = faculties.map( faculty => {
				let res = {
					label: faculty.name,
					value: faculty.id
				};
				return res;
			});
			this.disabled = false;
			//console.log("faculties options:", this.universityOptions);
		});
	}
	setFaculty(id){
		this.faculty_id = id;
		//console.log('setting uni id and fac id for filtering to', this.faculty_id);
	}	
	showModal(){
		this.modal.show();
	}
	setOrgId(uni_id, faculty_id) {
		let emitter = {
			uni_id: uni_id,
			faculty_id: faculty_id
		}
		this.select.emit(emitter);
	}
}