import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'final-journal',
	templateUrl: 'final-journal.component.html'
}) 
export class FinalJournalComponent {
	@Input() lesson;

}