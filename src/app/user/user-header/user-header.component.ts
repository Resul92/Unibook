import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';
import { University } from '../../shared/university.model';

@Component({
	selector: 'user-header',
	templateUrl: 'user-header.component.html'
}) 
export class UserHeaderComponent {
	@Input() 
	user: User;
	@Input() 
	university: University;
	@Input()
	currentState;
}