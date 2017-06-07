import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
	
	selector: 'user-main-info',
	templateUrl: 'user-main-info.component.html'
}) 
export class UserMainInfoComponent {
	@Input() user: User;

}