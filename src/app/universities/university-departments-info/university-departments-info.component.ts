import { Component, Input } from '@angular/core';

import { University } from '../../shared/university.model'

@Component({
	
	selector: 'university-departments-info',
	templateUrl: 'university-departments-info.component.html'
})
export class UniversityDepartmentsInfoComponent { 
	@Input()
	university: University;
}