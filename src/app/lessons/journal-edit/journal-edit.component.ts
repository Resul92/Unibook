import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'journal-edit',
	templateUrl: 'journal-edit.component.html'
}) 
export class JournalEditComponent {
	@Input() lesson;
}