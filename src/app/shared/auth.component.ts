import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Import User model here Import User from user.model
import { UserService } from './user.service';
import { UniversityService } from './university.service';

@Component({
	selector: 'auth',
	template: '<p>Loading...</p>'
}) 

export class AuthComponent {
	public token: string;

	constructor(
		private userService: UserService,
		private universityService: UniversityService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	
	ngOnInit(): void {
		console.log('auth component is alive!');
		this.route
			.queryParams
			.subscribe(params => {
			  let token = params['token'];
                	let url = this.route.snapshot.url[0].path;
                	console.log('url: ', url);
                if (token) {
                	console.log('token in auth component: ', token);
                	let url = this.route.snapshot.url[0].path;
                	console.log('url: ', url);
                	if(url === "AdministrationSystemView") { url = 'dashboard'};
			  		this.userService.login(token, url);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    // redirect to the main system if login failed
                    //window.location.href='http://192.168.1.78:8082/';
                    return false;
                }
		});
	}
}