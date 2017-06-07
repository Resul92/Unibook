import { Directive, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({ 
	selector: '[popUp]'
})
export class PopupDirective {
    constructor(private el: ElementRef) {}

	@HostListener('click', ["$event"])
	onClick() {
		// Popup
		event.preventDefault();
		$('.popup').removeClass('opened-popup');
		$(this.el.nativeElement).siblings('.popup').addClass('opened-popup');
	}
}
