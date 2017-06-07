import { Component, Input, OnInit } from '@angular/core';
import { University } from '../../shared/university.model';

@Component({
  selector: 'specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {
	@Input() 
	university: University;
	@Input() loading: boolean;
	ngOnInit(){
		console.log('university in specialty-list component: ', this.university);
	}
}
