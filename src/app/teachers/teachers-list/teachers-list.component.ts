import { OnInit, Component, Input, Output, EventEmitter, DoCheck, OnChanges } from '@angular/core';

import { University } from '../../shared/university.model';
import { Teacher } from '../../shared/teacher.model';
declare var $:any;
declare var Masonry:any;
declare var imagesLoaded:any;
@Component({
	
	selector: 'teachers-list',
	templateUrl: 'teachers-list.component.html'
}) 
export class TeachersListComponent implements OnInit, OnChanges {
	@Input() university: University;
 	@Input() teachers: Teacher[];
 	@Output() select = new EventEmitter();
	@Output() loadMoreTeachers = new EventEmitter();
	@Output() update = new EventEmitter();
 	@Input() allTeachers: Teacher[];
	@Input() loading: boolean;
	@Input() universities: University[];
	@Input() currentLang;
	@Input() sortByProperty;
	@Input() teacherStats;

	oldTeachersArray = [];
	constructor() {
	}
	ngOnInit(){
		this.loading = true;
		// for getting teachers from the real api
		// initial query to only ask for the first page	
		this.loadMoreTeachs();
	}
	ngOnChanges(changes){
		//console.log(changes);
		$(document).ready(function(){
			//console.log('masonry working');
			// init Isotope
			var grid = document.querySelector('.grid');

			var msnry = new Masonry( grid, {
			  itemSelector: '.grid-item',
			  columnWidth: '.grid-sizer',
			  percentPosition: true
			});

			imagesLoaded( grid ).on( 'progress', function() {
			  // layout Masonry after each image loads
			  msnry.layout();
			});
		});
	}
	search(results: Teacher[]): void {
		this.teachers = results;
		this.loading = false;
		console.log('students after search: ', this.teachers, this.loading);
	}
	onSortChange(value) {
		//console.log('sort change value:', value, "the teachers at the moment: ", this.teachers);
    	this.select.emit(value);
    	//this.sortByProperty = value;
    	console.log('sortByProperty', this.sortByProperty);
	}
	load(){
		this.loading = true;
	}
	loadMoreTeachs(){
		this.loading = true;
		this.loadMoreTeachers.emit();
	}
}