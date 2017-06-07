import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'lesson-about',
	templateUrl: 'lesson-about.component.html'
}) 
export class LessonAboutComponent {
	@Input() lesson;
}