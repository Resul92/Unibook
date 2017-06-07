var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UniversityService } from '../shared/university.service';
import { HelperService } from '../shared/helper.service';
import { TeacherService } from '../shared/teacher.service';
import { StudentService } from '../shared/student.service';
import { Router } from '@angular/router';
var DashboardComponent = (function () {
    function DashboardComponent(universityService, studentService, teacherService, helperService, router) {
        this.universityService = universityService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.helperService = helperService;
        this.router = router;
        this.state = ['info', 'detail', 'dashboard'];
        this.currentState = 'dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* the version with the real api
            this.universityService.getRealUniversities()
            .then(universities => console.log('universities list in the dashboard component', universities));
        */
        // should be changed to getRealUniversities - when working with real data as well as find the default university by org id
        this.universityService.getRealUniversities()
            .then(function (universities) {
            // in case i need to add pagination I'll need to slice it depending on the count? - or just ask by appropriate IDs? orders? pages?:
            // this.universities = universities.slice(0, 15);
            // this ID will have to be an org id 
            _this.universities = universities;
            console.log("universities list in the dashboard:", _this.universities);
            /* - treating dashboard uni just as any other uni
            this.universityService.getUniversity(100)
            .then(university => {
                this.university = university;
                console.log('this university: ', university);
            }); */
            _this.university = {
                id: 100,
                name: 'Azerbaycan Respublikasi Tehsil Nazirliyi',
                eyaniStudentCount: 123,
                qiyabiStudentCount: 45,
                bachelorStudentCount: 123,
                mastersStudentCount: 213,
                doctorsStudentCount: 153,
                kishiStudentCount: 123,
                qadinStudentCount: 531,
                eyaniTeacherCount: 123,
                qiyabiTeacherCount: 45,
                bachelorTeacherCount: 123,
                mastersTeacherCount: 213,
                doctorsTeacherCount: 153,
                kishiTeacherCount: 123,
                qadinTeacherCount: 531,
                studentCount: 100000,
                freshmanCount: 211,
                onCampusCount: 2000,
                offCampusCount: 385,
                teacherCount: 20000,
                city: 'Baku',
                street: "Akademik Zahid Xelilov",
                foundDate: 1920,
                departmentCount: 150,
                faculties: [
                    { id: 1, name: "Kompyuter muhandisliyi fakultesi4", director: "Elyiev Rovshan Ilkin" },
                    { id: 2, name: "Kompyuter muhandisliyi fakultesi2", director: "Elyiev Rovshan Ilkin" },
                    { id: 3, name: "Kompyuter muhandisliyi fakultesi3", director: "Elyiev Rovshan Ilkin" }
                ],
                departments: [
                    { id: 1, name: "Kompyuter muhandisliyi kafedra4", director: "Elyiev Rovshan Ilkin" },
                    { id: 2, name: "Kompyuter muhandisliyi kafedra2", director: "Elyiev Rovshan Ilkin" },
                    { id: 3, name: "Kompyuter muhandisliyi kafedra3", director: "Elyiev Rovshan Ilkin" }
                ],
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore necessitatibus, repellat accusamus assumenda consectetur dolor adipisci quaerat in commodi omnis ad expedita incidunt! Blanditiis sapiente qui aliquam tenetur doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius laudantium modi iure sed ullam architecto error culpa debitis deleniti voluptatibus nulla amet explicabo, possimus mollitia, quis quasi rem dolorum animi.",
                history: ['Universitetin yaranma tarixi: 28 may 1919', 'Azerbaycan dili kafedrasinin acilishi: 01 Iyun 1920', 'Muhendislik kafedrasinin aclishi: 21 Iyul 1922', 'Birinci telebelerin buraxilishi: 31 May 1923', 'Universitetde rus dili sektorunun aclishi: 17 Oktyabr 1923', 'Azerbaycanda birinci Kimya Labaratoriyasinin acilishi: 20 Noyabr 1925', 'Birinci ecnebi telebelerin qebulu: 01 Sentyabr 1926'],
                administration: [
                    { position: 'Rektor', name: 'Professor Asiman Eliyev Xanlar oglu' },
                    { position: 'Prorektor', name: 'Professor Orxan Abdullayev Eli oglu' },
                    { position: 'Prorektor', name: 'Professor Aygun Xanlarova Maarif qizi' }
                ],
                languages: ['Azeri', 'English', 'Russian', 'Turkish'],
                imgUrl: "img/logos/artn.png",
                coverImgUrl: "images/bdu.jpg"
            };
            // getting filter properties dynamically from the server
        });
        // get students list by universityid from a test back end
        // should be changed to getRealStudents - when working with real data
        this.studentService.getRealStudents()
            .then(function (students) {
            _this.students = students;
            console.log('all students:', students);
            _this.oldStudentsArray = _this.students;
        });
        /* for getting teachers from the real api
                this.teacherService.getRealTeachersByUniversityId()
                .then(response => console.log('the result in universities-info is', response));
        */
        // get teachers list by university id
        // should be changed to getRealTeachers - when working with real data
        this.teacherService.getRealTeachers()
            .then(function (teachers) {
            _this.teachers = teachers;
            console.log('teachers of this university:', teachers);
        });
    };
    DashboardComponent.prototype.gotoInfo = function (university) {
        var link = ['/info', university.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.setState = function (state) {
        this.currentState = state;
    };
    DashboardComponent.prototype.sortStudentsBy = function (property) {
        if (this.students) {
            this.helperService.sort(this.students, property);
        }
    };
    DashboardComponent.prototype.sortTeachersBy = function (property) {
        if (this.teachers) {
            this.helperService.sort(this.teachers, property);
        }
    };
    DashboardComponent.prototype.sortUniversitiesBy = function (property) {
        if (this.universities) {
            this.helperService.sort(this.universities, property);
        }
    };
    DashboardComponent.prototype.filterStudentsBy = function (property, value) {
        if (this.students) {
            this.helperService.filter(this.students, property, value);
        }
    };
    DashboardComponent.prototype.filterTeachersBy = function (property, value) {
        if (this.teachers) {
            this.helperService.filter(this.teachers, property, value);
        }
    };
    DashboardComponent.prototype.filterUniversitiesBy = function (property, value) {
        if (this.universities) {
            this.helperService.filter(this.universities, property, value);
        }
    };
    // Count total number of students for the Ministry information
    DashboardComponent.prototype.totalStudentCount = function () {
        var result = 0;
        if (this.universities) {
            for (var i = 0; i < this.universities.length; i++) {
                result += this.universities[i].studentCount;
            }
            return result;
        }
        else {
            console.log('universities not found');
        }
    };
    // Count total number of teachers for the Ministry information
    DashboardComponent.prototype.totalTeacherCount = function () {
        var result = 0;
        if (this.universities) {
            for (var i = 0; i < this.universities.length; i++) {
                result += this.universities[i].teacherCount;
            }
            return result;
        }
        else {
            console.log('universities not found');
        }
    };
    // Count total number of Departments for the Ministry information
    DashboardComponent.prototype.totalDepartmentCount = function () {
        var result = 0;
        if (this.universities) {
            for (var i = 0; i < this.universities.length; i++) {
                result += this.universities[i].departments.length;
            }
            return result;
        }
        else {
            console.log('universities not found');
        }
    };
    // set the universities variable to the results returned by the university search service
    // this automatically cascades the value to the university list component
    DashboardComponent.prototype.search = function (results) {
        this.universities = results;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [UniversityService,
        StudentService,
        TeacherService,
        HelperService,
        Router])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map