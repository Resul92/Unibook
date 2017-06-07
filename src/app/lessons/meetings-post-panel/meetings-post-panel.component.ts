import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'meetings-post-panel',
	templateUrl: 'meetings-post-panel.component.html'
}) 
export class MeetingsPostPanelComponent {
	@Input() lesson;

}