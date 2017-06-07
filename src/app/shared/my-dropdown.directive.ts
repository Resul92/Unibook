import { Directive, ElementRef, AfterViewInit} from '@angular/core';

declare var $: any

@Directive({
    selector: '[myDropdown]'
})
export class InitializeDropdown implements AfterViewInit {

    constructor(private el: ElementRef) {
    }

    public ngAfterViewInit() {
		// Custom select
		$(this.el.nativeElement).each(function() {
		  var classes = $(this).attr("class"),
		      id      = $(this).attr("id"),
		      name    = $(this).attr("name");
		  var template =  '<div class="' + classes + '">';
		      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
		      template += '<div class="custom-options">';
		      $(this).find("option").each(function() {
		        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		      });
		  template += '</div></div>';
		  
		  $(this).wrap('<div class="custom-select-wrapper"></div>');
		  $(this).hide();
		  $(this).after(template);
		});	
    }
}