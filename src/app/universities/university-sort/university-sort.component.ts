import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HelperService } from '../../shared/helper.service';
declare var $: any;
declare var Masonry:any;
declare var imagesLoaded:any;

@Component({
	
	selector: 'university-sort',
	templateUrl: 'university-sort.component.html'
})
export class UniversitySortComponent { 
    
    public firstTime: boolean;
    @ViewChild('sel') sel:ElementRef;

	@Output() 
	select = new EventEmitter();
	constructor(
		private helperService: HelperService
		) {
	}
	onChange(value) {
		console.log('Change made -- onChange');
    	this.select.emit(value)
	}
}