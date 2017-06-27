import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'custom-header',
	templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit { 	
	public redirectUrl;
	public user = {
		id: "",
		name: "",
		imgUrl: "",
		role: "",
		structure: {
			name: ""
		}
	};
	public student;
	public backUrl;
	public applications;
	public languages;
	public currentLang;
	constructor(private userService: UserService,
		public translate: TranslateService) {
	}

	ngOnInit(): void {
		this.userService.getCurrentUser()
		.then(user => {
			this.user = user;
			this.userService.getToken().then(token => {
				this.backUrl = `/AdministrationSystemView?token=${token}`;
				this.userService.getApplications().then(applications => {
					this.applications = applications;
					console.log('applcations in header component: ', this.applications);
				});
			console.log('lookup result for the current user is', this.user);
			});
			this.userService.setCurrentLanguage("az");
			this.userService.getCurrentLanguage().subscribe(currentLang => {
				console.log('currentLanguage: ', currentLang);
				this.currentLang = currentLang;
				this.userService.getLanguages().then(languages => {
					this.languages = languages;
				});
			});
		});
	}
	setLanguage(lang){
		console.log('lang is: ', lang);
		if(lang !== this.currentLang){
			// this.languages.unshift(this.currentLang);
			let currentLanguageIndex = this.languages.indexOf(lang);
			// this.languages.splice(currentLanguageIndex, 1);
			this.currentLang = lang;
			this.userService.setCurrentLanguage(lang);
		} else {
			//console.log('no new module selected');
		}
	}
	logout():void {
		this.userService.logout();
	}
}