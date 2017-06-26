import './custom-extensions';
import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { LoadersCssModule } from 'angular2-loaders-css';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {DropdownModule} from "ngx-dropdown";

// services
import { SpinnerService } from "./core/spinner/spinner.service";
import { UserService } from './shared/user.service';
import { UniversityService } from './shared/university.service';
import { StudentService } from './shared/student.service';
import { HelperService } from './shared/helper.service';
import { TeacherService } from './shared/teacher.service';
//Shared and app-level Components
import { SpinnerComponent } from "./core/spinner/spinner.component";
import { AuthComponent } from './shared/auth.component';
import { InitializeDropdown } from './shared/my-dropdown.directive';
import { HeaderComponent } from './shared/header.component';
import { CustomMasonryComponent } from './shared/custom-masonry.component';
import { routing } from './app-routing';
import { RemainderPercentagePipe } from './shared/remainder-percentage.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { FirstLettersPipe } from './shared/firstletters.pipe';
import { AuthGuard } from './shared/auth.guard';
import { SearchPipe } from './shared/search.pipe';
import { TranslatePipe } from './shared/translate.pipe';

import { DashboardComponent } from './dashboard/dashboard.component';
// University components
import { UniversitiesInfoComponent } from './universities/universities-info/universities-info.component';
import { UniversitySearchComponent } from './universities/university-search/university-search.component';
import { UniversityFormComponent } from './universities/university-form/university-form.component';
import { UniversitySortComponent } from './universities/university-sort/university-sort.component';
import { UniversityAsideComponent } from './universities/university-aside/university-aside.component';
import { UniversityDepartmentsInfoComponent } from './universities/university-departments-info/university-departments-info.component';
import { UniversitiesListComponent } from './universities/universities-list/universities-list.component';
import { DepartmentListComponent } from './universities/university-departments-list/university-departments-list.component';
import { FacultyListComponent } from './universities/faculty-list/faculty-list.component';
import { SpecialtyListComponent } from './universities/specialty-list/specialty-list.component';
// Student Cmponents
import { StudentSearchComponent } from './students/student-search/student-search.component';
import { StudentFilterComponent } from './students/student-filter/student-filter.component';
import { StudentSortComponent } from './students/student-sort/student-sort.component';
import { StudentChartsComponent } from './shared/student-charts.component';
import { StudentProfileComponent } from './students/student-profile/student-profile.component';
import { StudentAboutComponent } from './students/student-about/student-about.component';
import { StudentTedrisComponent } from './students/student-tedris/student-tedris.component';
import { StudentBioComponent } from './students/student-bio/student-bio.component';
import { StudentContactComponent } from './students/student-contact/student-contact.component';
import { StudentDocsComponent } from './students/student-docs/student-docs.component';
import { StudentHeaderComponent } from './students/student-header/student-header.component';
import { StudentMainInfoComponent } from './students/student-main-info/student-main-info.component';
import { StudentGradeFilterComponent } from './students/student-grade-filter/student-grade-filter.component';
import { StudentGradePanelComponent } from './students/student-grade-panel/student-grade-panel.component';
import { StudentPlanPanelComponent } from './students/student-plan-panel/student-plan-panel.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
// Teacher Components
import { TeacherAboutComponent } from './teachers/teacher-about/teacher-about.component';
import { TeacherTedrisComponent } from './teachers/teacher-tedris/teacher-tedris.component';
import { TeacherBioComponent } from './teachers/teacher-bio/teacher-bio.component';
import { TeacherContactComponent } from './teachers/teacher-contact/teacher-contact.component';
import { TeacherDocsComponent } from './teachers/teacher-docs/teacher-docs.component';
import { TeacherHeaderComponent } from './teachers/teacher-header/teacher-header.component';
import { TeacherMainInfoComponent } from './teachers/teacher-main-info/teacher-main-info.component';
import { TeacherGradeFilterComponent } from './teachers/teacher-grade-filter/teacher-grade-filter.component';
import { TeacherGradePanelComponent } from './teachers/teacher-grade-panel/teacher-grade-panel.component';
import { TeacherPlanPanelComponent } from './teachers/teacher-plan-panel/teacher-plan-panel.component';
import { TeacherSortComponent } from './teachers/teacher-sort/teacher-sort.component';
import { TeacherProfileComponent } from './teachers/teacher-profile/teacher-profile.component';
import { TeacherSearchComponent } from './teachers/teacher-search/teacher-search.component';
import { TeacherFilterComponent } from './teachers/teacher-filter/teacher-filter.component';
import { TeacherChartsComponent } from './shared/teacher-charts.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
// Lesson Components
import { LessonMainComponent } from './lessons/lesson-main/lesson-main.component';
import { LessonAboutComponent } from './lessons/lesson-about/lesson-about.component';
import { LessonHeaderComponent } from './lessons/lesson-header/lesson-header.component';
import { FinalJournalComponent } from './lessons/final-journal/final-journal.component';
import { JournalAddComponent } from './lessons/journal-add/journal-add.component';
import { JournalEditComponent } from './lessons/journal-edit/journal-edit.component';
import { EJournalComponent } from './lessons/e-journal/e-journal.component';
import { MeetingsListComponent } from './lessons/meetings-list/meetings-list.component';
import { MeetingsPostPanelComponent } from './lessons/meetings-post-panel/meetings-post-panel.component';
import { MembersListComponent } from './lessons/members-list/members-list.component';
import { MeetingFilesComponent } from './lessons/meeting-files/meeting-files.component';
import { MeetingComponent } from './lessons/meeting/meeting.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserBioComponent } from './user/user-bio/user-bio.component';
import { UserMainInfoComponent } from './user/user-main-info/user-main-info.component';
import { UserContactComponent } from './user/user-contact/user-contact.component';
import { UserDocsComponent } from './user/user-docs/user-docs.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import {DefaultImage} from './shared/default-image.directive';
import { NavButtonDirective } from './shared/nav-button.directive';
import { PopupDirective } from './shared/popup.directive';
import { AsideTriggerDirective } from './shared/aside-trigger.directive';
import { LoaderComponent } from './shared/loader.component'
import { FilterByUniDirective } from './shared/filter-by-uni.directive';
import { SelectModule } from 'ng-select';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ModalModule.forRoot(),
		routing,
	    MultiselectDropdownModule,
		SelectModule,
		DropdownModule,
		LoadersCssModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
	],
	declarations: [
		InitializeDropdown,
		AppComponent,
		AuthComponent,
		CustomMasonryComponent,
		HeaderComponent,
		RemainderPercentagePipe,
		CapitalizePipe,
		FirstLettersPipe,
		DashboardComponent,
		UniversityAsideComponent,
		UniversityDepartmentsInfoComponent,
		DepartmentListComponent,
		UniversitiesListComponent,
		UniversitiesInfoComponent,
		UniversitySearchComponent,
		UniversityFormComponent,
		UniversitySortComponent,
		FacultyListComponent,
		SpecialtyListComponent,
		StudentFilterComponent,
		StudentSearchComponent,
		StudentSortComponent,
		StudentAboutComponent,
		StudentBioComponent,
		StudentContactComponent,
		StudentDocsComponent,
		StudentHeaderComponent,
		StudentChartsComponent,
		StudentMainInfoComponent,
		StudentGradeFilterComponent,
		StudentGradePanelComponent,
		StudentPlanPanelComponent,
		StudentTedrisComponent,
		StudentProfileComponent,
		StudentsListComponent,
		TeacherSortComponent,
		TeacherFilterComponent,
		TeacherProfileComponent,
		TeacherSearchComponent,
		TeacherChartsComponent,
		TeachersListComponent,
		TeacherAboutComponent,
		TeacherBioComponent,
		TeacherContactComponent,
		TeacherDocsComponent,
		TeacherHeaderComponent,
		TeacherMainInfoComponent,
		TeacherGradeFilterComponent,
		TeacherGradePanelComponent,
		TeacherPlanPanelComponent,
		TeacherTedrisComponent,
		LessonMainComponent, 
		LessonHeaderComponent, 
		LessonAboutComponent, 
		FinalJournalComponent,
		JournalAddComponent,
		JournalEditComponent,
		EJournalComponent,
		MeetingsListComponent,
		MeetingsPostPanelComponent,
		MembersListComponent,
		MeetingComponent,
		MeetingFilesComponent,
		UserProfileComponent,
		UserBioComponent,
		UserMainInfoComponent,
		UserContactComponent,
		UserDocsComponent,
		UserHeaderComponent,
		DefaultImage,
		NavButtonDirective,
		PopupDirective,
		AsideTriggerDirective,
		LoaderComponent,
		FilterByUniDirective,
		SpinnerComponent,
		SearchPipe,
		TranslatePipe
	],
	providers: [
		AuthGuard,
		UniversityService,
		UserService,
		HelperService,
		StudentService,
		TeacherService,
		SpinnerService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }