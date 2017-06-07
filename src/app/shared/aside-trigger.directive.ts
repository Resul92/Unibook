import { Directive, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({ 
	selector: '[asideTrigger]'
})
export class AsideTriggerDirective {
    constructor(private el: ElementRef) {}

	@HostListener('click', ["$event"])
	onClick() {
		event.preventDefault();
		$(this.el.nativeElement).toggleClass('active-aside-trigger');
		if( $(this.el.nativeElement).hasClass('active-aside-trigger') ) {
			$('.left-aside').addClass('active-left-aside');
		} else {
			$('.left-aside').removeClass('active-left-aside');
		}
	}
}
