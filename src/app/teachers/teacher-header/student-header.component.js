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
var student_model_1 = require("../../shared/student.model");
var university_model_1 = require("../../shared/university.model");
var StudentHeaderComponent = (function () {
    function StudentHeaderComponent() {
    }
    return StudentHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", student_model_1.Student)
], StudentHeaderComponent.prototype, "student", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", university_model_1.University)
], StudentHeaderComponent.prototype, "university", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StudentHeaderComponent.prototype, "currentState", void 0);
StudentHeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'student-header',
        templateUrl: 'student-header.component.html'
    }),
    __metadata("design:paramtypes", [])
], StudentHeaderComponent);
exports.StudentHeaderComponent = StudentHeaderComponent;
//# sourceMappingURL=student-header.component.js.map