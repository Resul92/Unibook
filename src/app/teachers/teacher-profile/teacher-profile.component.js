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
import { TeacherService } from '../../shared/teacher.service';
import { UniversityService } from '../../shared/university.service';
var TeacherProfileComponent = (function () {
    function TeacherProfileComponent(universityService, teacherService, route, router) {
        this.universityService = universityService;
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.state = ['about', 'tedris'];
        this.currentState = this.state[0];
    }
    /* - final version
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.teacherService.getRealTeacherById(id)
            .then(teacher => {
                this.teacher = teacher;
                // getting the university from university ID from the teacher.
                //this.universityService.getUniversity(teacher.universityId)
                //.then(university => {
                //	this.university = university;
            });
        });
    } */
    TeacherProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.teacherService.getTeacher(id)
                .then(function (teacher) {
                _this.teacher = teacher;
                _this.universityService.getUniversity(teacher.universityId)
                    .then(function (university) {
                    _this.university = university;
                });
            });
        });
    };
    TeacherProfileComponent.prototype.goto = function (state) {
        this.currentState = state;
    };
    return TeacherProfileComponent;
}());
TeacherProfileComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-profile',
        templateUrl: 'teacher-profile.component.html'
    }),
    __metadata("design:paramtypes", [UniversityService,
        TeacherService,
        ActivatedRoute,
        Router])
], TeacherProfileComponent);
export { TeacherProfileComponent };
//# sourceMappingURL=teacher-profile.component.js.map