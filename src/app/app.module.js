var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import './rxjs-extensions';
import './custom-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// only for testing purposes - to be removed from here and the imports because it intereferes with XHR requests
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';///////
//
import { AppComponent } from './app.component';
// services
import { LoggedInGuard } from './shared/logged-in.guard';
import { UserService } from './shared/user.service';
import { UniversityService } from './shared/university.service';
import { StudentService } from './shared/student.service';
import { HelperService } from './shared/helper.service';
import { TeacherService } from './shared/teacher.service';
import { UniversityFilterPropertyService } from './shared/university-filter-property.service';
import { StudentFilterPropertyService } from './shared/student-filter-property.service';
import { TeacherFilterPropertyService } from './shared/teacher-filter-property.service';
//Shared and app-level Components
import { AuthComponent } from './shared/auth.component';
import { InitializeDropdown } from './shared/my-dropdown.directive';
import { HeaderComponent } from './shared/header.component';
import { CustomJqueryComponent } from './shared/custom-jquery.component';
import { CustomMasonryComponent } from './shared/custom-masonry.component';
import { routing } from './app-routing';
import { FirstLetterPipe } from './shared/first-letter.pipe';
import { RemainderPercentagePipe } from './shared/remainder-percentage.pipe';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
// University components
import { UniversitiesInfoComponent } from './universities/universities-info/universities-info.component';
import { UniversitySearchComponent } from './universities/university-search/university-search.component';
import { UniversityFormComponent } from './universities/university-form/university-form.component';
import { UniversitySortComponent } from './universities/university-sort/university-sort.component';
import { UniversityAsideComponent } from './universities/university-aside/university-aside.component';
import { UniversityDepartmentsInfoComponent } from './universities/university-departments-info/university-departments-info.component';
import { UniversityDetailInfoComponent } from './universities/university-detail-info/university-detail-info.component';
import { UniversitiesListComponent } from './universities/universities-list/universities-list.component';
import { DepartmentListComponent } from './universities/university-departments-list/university-departments-list.component';
import { FacultyListComponent } from './universities/faculty-list/faculty-list.component';
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            //		InMemoryWebApiModule.forRoot(InMemoryDataService),		
            routing
        ],
        declarations: [
            InitializeDropdown,
            AppComponent,
            AuthComponent,
            CustomJqueryComponent,
            CustomMasonryComponent,
            HeaderComponent,
            FirstLetterPipe,
            RemainderPercentagePipe,
            CapitalizePipe,
            DashboardComponent,
            UniversityAsideComponent,
            UniversityDepartmentsInfoComponent,
            UniversityDetailInfoComponent,
            DepartmentListComponent,
            UniversitiesListComponent,
            UniversitiesInfoComponent,
            UniversitySearchComponent,
            UniversityFormComponent,
            UniversitySortComponent,
            FacultyListComponent,
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
            MeetingFilesComponent
        ],
        providers: [
            UniversityService,
            LoggedInGuard,
            UserService,
            HelperService,
            StudentService,
            TeacherService,
            UniversityFilterPropertyService,
            StudentFilterPropertyService,
            TeacherFilterPropertyService,
        ],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map