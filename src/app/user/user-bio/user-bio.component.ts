import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
	
	selector: 'user-bio',
	templateUrl: 'user-bio.component.html'
}) 
export class UserBioComponent {
	@Input() user: User;

}