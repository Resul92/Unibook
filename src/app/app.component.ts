import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var $: any;

@Component({
	selector: 'my-app',
	template: `
				<router-outlet></router-outlet>
				`
})

export class AppComponent implements OnInit {
    param = {value: 'world'};
    constructor(public translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
	title = 'Unibook';
	ngOnInit(){
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
