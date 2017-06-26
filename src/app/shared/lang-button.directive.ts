import { Directive, ElementRef, Input, HostListener } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({ 
	selector: '[langButton]'
})
export class LangButtonDirective {
    constructor(private el: ElementRef) {}

	@HostListener('click', ["$event"])
	onClick() {
		event.preventDefault();
		$('.aside-lang-list').slideToggle(300);
	}
}
