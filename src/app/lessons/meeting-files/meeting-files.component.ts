import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'meeting-files',
	templateUrl: 'meeting-files.component.html'
}) 
export class MeetingFilesComponent {
	@Input() lesson;

}