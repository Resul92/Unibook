import { Component, OnInit } from '@angular/core';

@Component({
	
	selector: 'lesson-main',
	templateUrl: 'lesson-main.component.html'
}) 
export class LessonMainComponent implements OnInit {
	lesson: '';
	currentState;
	states = ['lesson-about', 'members-list', 'meeting', 'e-journal', 'final-journal', 'journal-add', 'journal-edit', 'meeting-files']
	
	ngOnInit(){
		this.currentState ="lesson-about";	
	}

	setCurrentState (event) {
		this.currentState = event;
	}

}