import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';

@Component({
	selector: 'user-profile',
	templateUrl: 'user-profile.component.html'
}) 

export class UserProfileComponent {
	state = ['about', 'tedris'];
	currentState = this.state[0];
	user: User;
 	users: User[];
 	university: University;
	private authToken = JSON.parse(localStorage.getItem('currentUser')).token;

	constructor(
		private universityService: UniversityService,
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	ngOnInit(): void {
		this.userService.getCurrentUser()
		.then(user => {
			console.log('user: ', user);
			this.user = user
		});
	}
	goto(state) {
		this.currentState = state;
	}
}