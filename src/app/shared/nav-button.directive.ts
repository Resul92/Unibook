import { Directive, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({ 
	selector: '[navButton]'
})
export class NavButtonDirective {
    constructor(private el: ElementRef) {}

	@HostListener('click', ["$event"])
	onClick() {
		event.preventDefault();
		$('.aside-nav-list').slideToggle(300);
	}
}
