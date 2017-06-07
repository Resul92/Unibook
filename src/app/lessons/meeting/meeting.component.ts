import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'meeting',
	templateUrl: 'meeting.component.html'
}) 
export class MeetingComponent {
	@Input() lesson;

}