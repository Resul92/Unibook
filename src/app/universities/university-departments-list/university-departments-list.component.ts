import { Component, Input, OnInit } from '@angular/core';
import { University } from '../../shared/university.model';

@Component({
	
	selector: 'university-departments-list',
	templateUrl: 'university-departments-list.component.html'
})
export class DepartmentListComponent implements OnInit { 
	@Input() 
	university: University;
	@Input() loading: boolean;
	@Input() currentLang;

	ngOnInit(){
		console.log('university in faculty-list component: ', this.university);
	}
}