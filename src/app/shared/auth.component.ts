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
                if (token) {
                	console.log('token in auth component: ', token);
			  		this.userService.login(token);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
		});
	}
}