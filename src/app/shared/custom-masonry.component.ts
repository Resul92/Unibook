import { Component, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Masonry:any;
declare var imagesLoaded:any;


@Component({
	
	selector: 'custom-masonry',
	template: ''
})
export class CustomMasonryComponent implements AfterViewInit { 
	ngAfterViewInit() {
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
}
