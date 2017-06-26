import { OnInit, OnChanges, Component, EventEmitter, Output, Input } from '@angular/core';
import { University } from '../../shared/university.model';

declare var $:any;
declare var Masonry:any;
declare var imagesLoaded:any;
@Component({
	
	selector: 'universities-list',
	templateUrl: 'universities-list.component.html'
})

export class UniversitiesListComponent implements OnInit,OnChanges { 
	@Input() universities: University[];
	@Output() gotoInfo = new EventEmitter<University>();
	@Output() loadMoreUniversities = new EventEmitter<any>();
	@Output() update = new EventEmitter();
	@Input() loading: boolean;
	@Input() currentLang;

	goInfo(university: University){
		this.gotoInfo.emit(university);
	}
	ngOnInit(){
		// get students list by universityid from a test back end
		// initial query to only ask for the first page	
		this.loadMoreUnis();
		console.log('current language in university list: ', this.currentLang);
	}
	loadMoreUnis(){
		this.loadMoreUniversities.emit();
	}
	ngOnChanges(changes){
		//console.log(changes);
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
	search(results: University[]): void {
		this.update.emit(results);
	}
}