import { Component, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
	
	selector: 'user-docs',
	templateUrl: 'user-docs.component.html'
}) 
export class UserDocsComponent {
	@Input() user: User;

}