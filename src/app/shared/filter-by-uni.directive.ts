import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({ 
    selector: '[filterByUni]'
})
export class FilterByUniDirective {
    constructor(private el: ElementRef) {}

    @HostListener('click', ["$event"])
    onClick() {
        console.log('clicked');
        event.preventDefault();
        if($('.wrapped-modal').hasClass('opened-wrapper-modal')){
            $('.wrapper-modal').removeClass('opened-wrapper-modal');
            $(this.el.nativeElement).siblings('.wrapper-modal').addClass('opened-wrapper-modal');
        } else {
            $('.wrapper-modal').addClass('opened-wrapper-modal');
        }
    }
    ngAfterViewInit(){
        $(".close").on('click', function(){
           $('.wrapper-modal').removeClass('opened-wrapper-modal');
        });
        $(".submitter").on('click', function(e){
           $('.wrapper-modal').removeClass('opened-wrapper-modal');
        });
        $('.modal-overlay').on('click', function() {
           $('.wrapper-modal').removeClass('opened-wrapper-modal');
        });
        /// probably just put it in app.component
        $(document).mouseup(function (e) {
            var wrapper_modal = $(".wrapper-modal");
            if (!wrapper_modal.is(e.target) && wrapper_modal.has(e.target).length == 0) {
                wrapper_modal.removeClass('opened-wrapper-modal');
            }
        });
    }
}

