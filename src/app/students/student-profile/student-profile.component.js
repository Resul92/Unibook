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
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../shared/student.service';
import { UniversityService } from '../../shared/university.service';
var StudentProfileComponent = (function () {
    function StudentProfileComponent(universityService, studentService, route, router) {
        this.universityService = universityService;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.state = ['about', 'tedris'];
        this.currentState = this.state[0];
    }
    /*
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.studentService.getRealStudentById(id)
            .then(student => {
                this.student = student;
                // getting the university from university ID from the student.
                //this.universityService.getUniversity(student.universityId)
                //.then(university => this.university = university);
            });
        });
    }*/
    StudentProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.studentService.getStudent(id)
                .then(function (student) {
                _this.student = student;
                _this.universityService.getUniversity(student.universityId)
                    .then(function (university) { return _this.university = university; });
            });
        });
    };
    StudentProfileComponent.prototype.goto = function (state) {
        this.currentState = state;
    };
    return StudentProfileComponent;
}());
StudentProfileComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'student-profile',
        templateUrl: 'student-profile.component.html'
    }),
    __metadata("design:paramtypes", [UniversityService,
        StudentService,
        ActivatedRoute,
        Router])
], StudentProfileComponent);
export { StudentProfileComponent };
//# sourceMappingURL=student-profile.component.js.map