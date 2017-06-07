var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HelperService } from '../../shared/helper.service';
import { StudentService } from '../../shared/student.service';
import { TeacherService } from '../../shared/teacher.service';
import { University } from '../../shared/university.model';
import { UniversityService } from '../../shared/university.service';
import { StudentFilterPropertyService } from '../../shared/student-filter-property.service';
import { TeacherFilterPropertyService } from '../../shared/teacher-filter-property.service';
var UniversitiesInfoComponent = (function () {
    function UniversitiesInfoComponent(universityService, helperService, studentService, teacherService, studentFilterPropertyService, teacherFilterPropertyService, location, route, router) {
        this.universityService = universityService;
        this.helperService = helperService;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.studentFilterPropertyService = studentFilterPropertyService;
        this.teacherFilterPropertyService = teacherFilterPropertyService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.title = 'Unibook';
        this.state = ['info', 'detail', 'dashboard', 'students-list', 'teachers-list'];
        this.currentState = this.state[1];
        this.errorMessage = '';
        this.isLoading = true;
    }
    /* - to be removed when for real
        ngOnInit(): void {
            this.route.params.forEach((params: Params) => {
                let id = +params['id'];
                // getting the university by its id from the server
                this.universityService.getRealUniversityById(id)
                .then(university => {
                    this.university = university;
                    console.log('this university: ', university);
                });
                /* for getting students from the real api
                        this.studentService.getRealStudentsByUniversityId()
                        .then(response => console.log('the result in universities-info is', response));
                */
    /* - to be removed when real

    // get students list by universityid from a test back end
    this.studentService.getStudentByProperty('universityId', id)
    .then(students => {
        this.students = students;
        console.log('students of this university:', students);
         this.oldStudentsArray= this.students;
    });
    /* for getting teachers from the real api
            this.teacherService.getRealTeachersByUniversityId()
            .then(response => console.log('the result in universities-info is', response));
    */
    /* - to be removed when for real
    // get teachers list by university id
    this.teacherService.getTeacherByProperty('universityId', id)
    .then(teachers => {
        this.teachers = teachers;
        console.log('teachers of this university:', teachers);
    });
});
}
*/
    UniversitiesInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            // getting the university by its id from the server
            _this.universityService.getRealUniversityById(id)
                .then(function (university) {
                _this.university = university;
                console.log('this university: ', university);
                _this.universityService.getRealUniversityStats(id)
                    .then(function (response) {
                    console.log('uni stats: ', response);
                    _this.university.specialtyCount = response.specialityCount;
                    _this.university.departmentCount = response.departmentCount;
                    _this.university.studentCount = response.studentCount;
                    _this.university.teacherCount = response.teacherCount;
                });
            });
            /* for getting students from the real api
                    this.studentService.getRealStudentsByUniversityId()
                    .then(response => console.log('the result in universities-info is', response));
            */
            // get students list by universityid from a test back end
            _this.studentService.getRealStudentsByUniversityId()
                .then(function (students) {
                _this.students = students;
                console.log('students of this university:', students);
                _this.oldStudentsArray = _this.students;
            });
            /* for getting teachers from the real api
                    this.teacherService.getRealTeachersByUniversityId()
                    .then(response => console.log('the result in universities-info is', response));
            */
            // get teachers list by university id
            _this.teacherService.getRealTeachersByUniversityId()
                .then(function (teachers) {
                _this.teachers = teachers;
                console.log('teachers of this university:', teachers);
            });
        });
    };
    UniversitiesInfoComponent.prototype.ngDoCheck = function () {
        if (this.students instanceof Array) {
            for (var i in this.students) {
                if (this.students[i].courseYear !== this.oldStudentsArray[i].courseYear) {
                    console.log("change detected");
                    console.log('old students', this.oldStudentsArray);
                    console.log('new students', this.students);
                    this.oldStudentsArray = this.students;
                    return;
                }
            }
        }
    };
    UniversitiesInfoComponent.prototype.filterTeachersByProperty = function (property, value) {
        console.log('initializing getTeachersByProperty:', property, value);
        this.teacherService.getTeacherByProperty(property, value);
    };
    UniversitiesInfoComponent.prototype.filterStudentsByProperty = function (property, value) {
        var _this = this;
        console.log('initializing getStudentsByProperty:', property, value);
        this.studentService.getStudentByProperty(property, value)
            .then(function (students) { return _this.students = students; });
    };
    UniversitiesInfoComponent.prototype.getTeachersByProperty = function (property, value) {
        var _this = this;
        console.log('initializing getTeachersByProperty:', property, value);
        this.teacherService.getTeacherByProperty(property, value)
            .then(function (teachers) { return _this.teachers = teachers; });
    };
    UniversitiesInfoComponent.prototype.getStudentsByProperty = function (property, value) {
        var _this = this;
        console.log('initializing getStudentsByProperty:', property, value);
        this.studentService.getStudentByProperty(property, value)
            .then(function (students) { return _this.students = students; });
    };
    UniversitiesInfoComponent.prototype.navSelect = function (state) {
        this.currentState = state;
    };
    UniversitiesInfoComponent.prototype.sortStudentsBy = function (property) {
        if (this.students) {
            this.helperService.sort(this.students, property);
        }
        console.log('this students after sorting: ', this.students);
    };
    UniversitiesInfoComponent.prototype.sortTeachersBy = function (property) {
        if (this.teachers) {
            console.log('sortBy in the universities component started, trying to sort TEACHERS by: ', property);
            this.helperService.sort(this.teachers, property);
            console.log('this teachers after sorting: ', this.teachers);
        }
        else {
            console.log('no teachers found');
        }
    };
    return UniversitiesInfoComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], UniversitiesInfoComponent.prototype, "university", void 0);
UniversitiesInfoComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'my-universities',
        templateUrl: "universities-info.component.html"
    }),
    __metadata("design:paramtypes", [UniversityService,
        HelperService,
        StudentService,
        TeacherService,
        StudentFilterPropertyService,
        TeacherFilterPropertyService,
        Location,
        ActivatedRoute,
        Router])
], UniversitiesInfoComponent);
export { UniversitiesInfoComponent };
//# sourceMappingURL=universities-info.component.js.map