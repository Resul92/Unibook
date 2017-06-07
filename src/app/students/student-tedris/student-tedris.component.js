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
import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';
var StudentTedrisComponent = (function () {
    function StudentTedrisComponent(studentService, route, router) {
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.state = ['plan', 'grades', 'about'];
        this.currentState = this.state[0];
    }
    StudentTedrisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.studentService.getStudent(id)
                .then(function (student) { return _this.student = student; });
        });
    };
    StudentTedrisComponent.prototype.goto = function (state) {
        this.currentState = state;
    };
    return StudentTedrisComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Student)
], StudentTedrisComponent.prototype, "student", void 0);
StudentTedrisComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'student-tedris',
        templateUrl: 'student-tedris.component.html'
    }),
    __metadata("design:paramtypes", [StudentService,
        ActivatedRoute,
        Router])
], StudentTedrisComponent);
export { StudentTedrisComponent };
//# sourceMappingURL=student-tedris.component.js.map