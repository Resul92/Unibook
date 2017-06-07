"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var teacher_model_1 = require("../../shared/teacher.model");
var teacher_service_1 = require("../../shared/teacher.service");
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
    core_1.Input(),
    __metadata("design:type", teacher_model_1.Teacher)
], TeacherAboutComponent.prototype, "teacher", void 0);
TeacherAboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'teacher-about',
        templateUrl: 'teacher-about.component.html'
    }),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService,
        router_1.ActivatedRoute,
        router_1.Router])
], TeacherAboutComponent);
exports.TeacherAboutComponent = TeacherAboutComponent;
//# sourceMappingURL=student-about.component.js.map