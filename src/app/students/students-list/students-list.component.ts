import { OnInit, Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { University } from '../../shared/university.model';
import { Student } from '../../shared/student.model';

declare var $:any;
declare var Masonry:any;
declare var imagesLoaded:any;
@Component({
	
	selector: 'students-list',
	templateUrl: 'students-list.component.html'
}) 
export class StudentsListComponent implements OnInit,OnChanges {
	@Input() university: University;
 	@Input() students: Student[];
 	@Output() select = new EventEmitter();	
	@Output() loadMoreStudents = new EventEmitter<any>();
	@Output() update = new EventEmitter();
 	@Input() allStudents: Student[];
	@Input() loading: boolean;
	@Input() universities: University[];

	constructor(
		private studentService: StudentService) {
	}
	ngOnInit(){
		this.loading = true;
		// get students list by universityid from a test back end
		// initial query to only ask for the first page	
		this.loadMoreStuds();
	}
	ngOnChanges(changes){
		console.log(changes);
		$(document).ready(function(){
			console.log('masonry working');
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
	search(results: Student[]): void {
		this.update.emit(results);
	}
	onSortChange(value) {
		console.log('sort by: ', value);
    	this.select.emit(value)
	}
	loadMoreStuds(){
		this.loading = true;
		this.loadMoreStudents.emit();
	}
}