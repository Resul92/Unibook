import { RouterModule } from '@angular/router';
import { UniversitiesInfoComponent } from './universities/universities-info/universities-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './students/student-profile/student-profile.component';
import { LessonMainComponent } from './lessons/lesson-main/lesson-main.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeacherProfileComponent } from './teachers/teacher-profile/teacher-profile.component';
import { AuthComponent } from './shared/auth.component';
var appRoutes = [
    {
        path: 'info/:id',
        component: UniversitiesInfoComponent
    },
    {
        path: 'student/:id',
        component: StudentProfileComponent
    },
    {
        path: 'teacher/:id',
        component: TeacherProfileComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'teachers',
        component: TeachersListComponent
    },
    {
        path: 'lesson/:id',
        component: LessonMainComponent
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
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.js.map