import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'my-app',
	template: `
				<router-outlet></router-outlet>
				`
})

export class AppComponent implements OnInit {
	title = 'Unibook';
	ngOnInit(){
		localStorage.removeItem('currentUser');
	}
	ngAfterViewInit(){
		$(document).ready(function(){
		//Loader
			$(window).on('load', function(){
				console.log("custom jquery loaded");
				$('.loader-block').delay(500).fadeOut('slow');
				$('body').css('overflow', 'visible');
			});

			$(window).scroll(function(){
				var mainSectionHeight = $('.main-section').height() - 200,
					navScrollTop = $(this).scrollTop();

				if(navScrollTop > mainSectionHeight) {
					$('.nav').addClass('scrolled');
				} else {
					$('.nav').removeClass('scrolled');
				}
			});
		});

		$(document).mouseup(function (e) {
			var popup = $(".popup");
			if (!popup.is(e.target) && popup.has(e.target).length == 0) {
				popup.removeClass('opened-popup');
			}
		});
	}
}
