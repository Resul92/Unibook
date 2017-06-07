import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'journal-add',
	templateUrl: 'journal-add.component.html'
}) 
export class JournalAddComponent {
	@Input() lesson;
}