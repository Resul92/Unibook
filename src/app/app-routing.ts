import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversitiesInfoComponent } from './universities/universities-info/universities-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { StudentProfileComponent } from './students/student-profile/student-profile.component';
import { LessonMainComponent } from './lessons/lesson-main/lesson-main.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeacherProfileComponent } from './teachers/teacher-profile/teacher-profile.component';
import { AuthComponent } from './shared/auth.component';
import { AuthGuard } from './shared/auth.guard';
const appRoutes: Routes = [
	{
		path: 'info/:id',
		component: UniversitiesInfoComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'student/:id',
		component: StudentProfileComponent,
		canActivate: [AuthGuard]
	},

	{
		path: 'teacher/:id',
		component: TeacherProfileComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'user-profile',
		component: UserProfileComponent,
		canActivate: [AuthGuard]
	},	
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},	
	{
		path: 'teachers',
		component: TeachersListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'lesson/:id',
		component: LessonMainComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '#',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'AdministrationSystemView',
		component: AuthComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);