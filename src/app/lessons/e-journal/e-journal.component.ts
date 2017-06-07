import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'e-journal',
	templateUrl: 'e-journal.component.html'
}) 
export class EJournalComponent {
	@Input() lesson;
}