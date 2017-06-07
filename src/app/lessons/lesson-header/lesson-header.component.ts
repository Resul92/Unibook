import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
	
	selector: 'lesson-header',
	templateUrl: 'lesson-header.component.html'
}) 
export class LessonHeaderComponent {
	@Input () currentState: string;

	@Input() lesson;

	@Input () states;

	@Output() 
	select = new EventEmitter();

	// event emitting method that changes the state in the parent component of lesson-main 
	// it gets called from nav buttons that control the in-page navigation
	navSelect(value){
		this.select.emit(value)
	}
}