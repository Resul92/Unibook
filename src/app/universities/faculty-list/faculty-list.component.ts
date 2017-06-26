import { Component, Input, OnInit } from '@angular/core';
import { University } from '../../shared/university.model';

@Component({
	
	selector: 'faculty-list',
	templateUrl: 'faculty-list.component.html'
})
export class FacultyListComponent implements OnInit { 
	@Input() 
	university: University;
	@Input() loading: boolean;
	@Input() currentLang;

	ngOnInit(){
		//console.log('university in faculty-list component: ', this.university);
		console.log('current lang in faculty-list component: ', this.currentLang);
	}
}