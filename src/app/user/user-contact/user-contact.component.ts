import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
	
	selector: 'user-contact',
	templateUrl: 'user-contact.component.html'
}) 
export class UserContactComponent {
	@Input() user: User;

}