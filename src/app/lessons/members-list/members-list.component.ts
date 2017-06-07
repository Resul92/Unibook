import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'members-list',
	templateUrl: 'members-list.component.html'
}) 
export class MembersListComponent {
	@Input() lesson;

}