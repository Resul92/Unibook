var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeacherFilterProperty } from '../../shared/teacher-filter-property.model';
var TeacherFilterComponent = (function () {
    function TeacherFilterComponent() {
        this.select = new EventEmitter();
    }
    TeacherFilterComponent.prototype.onChange = function (value) {
        this.select.emit(value);
    };
    return TeacherFilterComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TeacherFilterProperty)
], TeacherFilterComponent.prototype, "teacherFilterProperties", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TeacherFilterComponent.prototype, "select", void 0);
TeacherFilterComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-filter',
        templateUrl: 'teacher-filter.component.html'
    }),
    __metadata("design:paramtypes", [])
], TeacherFilterComponent);
export { TeacherFilterComponent };
//# sourceMappingURL=teacher-filter.component.js.map