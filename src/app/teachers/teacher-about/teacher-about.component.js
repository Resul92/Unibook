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
import { Teacher } from '../../shared/teacher.model';
import { TeacherService } from '../../shared/teacher.service';
var TeacherAboutComponent = (function () {
    function TeacherAboutComponent(teacherService, route, router) {
        this.teacherService = teacherService;
        this.route = route;
        this.router = router;
        this.state = ['bio', 'contact', 'docs', 'main-info', 'plan', 'grades'];
        this.currentState = this.state[0];
    }
    TeacherAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.teacherService.getTeacher(id)
                .then(function (teacher) { return _this.teacher = teacher; });
        });
    };
    TeacherAboutComponent.prototype.goto = function (state) {
        this.currentState = state;
    };
    return TeacherAboutComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Teacher)
], TeacherAboutComponent.prototype, "teacher", void 0);
TeacherAboutComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-about',
        templateUrl: 'teacher-about.component.html'
    }),
    __metadata("design:paramtypes", [TeacherService,
        ActivatedRoute,
        Router])
], TeacherAboutComponent);
export { TeacherAboutComponent };
//# sourceMappingURL=teacher-about.component.js.map