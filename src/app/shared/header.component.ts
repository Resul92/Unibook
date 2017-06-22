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
	constructor(private userService: UserService,
		public translate: TranslateService) {
	        translate.addLangs(["en", "fr"]);
	        translate.setDefaultLang('en');

	        let browserLang = translate.getBrowserLang();
	        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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
		});
		this.translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
		    console.log(res);
		    //=> 'hello world'
		});
		this.translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
		    console.log(res);
		    //=> 'hello world'
		});
	}
	
	logout():void {
		this.userService.logout();
	}
}