var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var TeacherSortComponent = (function () {
    function TeacherSortComponent() {
        this.select = new EventEmitter();
    }
    TeacherSortComponent.prototype.onChange = function (value) {
        console.log('onChange value in teacher-sort component that we are emitting out is :', value);
        this.select.emit(value);
    };
    return TeacherSortComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], TeacherSortComponent.prototype, "select", void 0);
TeacherSortComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-sort',
        templateUrl: 'teacher-sort.component.html'
    }),
    __metadata("design:paramtypes", [])
], TeacherSortComponent);
export { TeacherSortComponent };
//# sourceMappingURL=teacher-sort.component.js.map