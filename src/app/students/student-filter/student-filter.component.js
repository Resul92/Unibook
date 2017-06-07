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
import { StudentFilterProperty } from '../../shared/student-filter-property.model';
var StudentFilterComponent = (function () {
    function StudentFilterComponent() {
        this.select = new EventEmitter();
    }
    StudentFilterComponent.prototype.onChange = function (value) {
        this.select.emit(value);
    };
    return StudentFilterComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", StudentFilterProperty)
], StudentFilterComponent.prototype, "studentFilterProperties", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StudentFilterComponent.prototype, "select", void 0);
StudentFilterComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'student-filter',
        templateUrl: 'student-filter.component.html'
    }),
    __metadata("design:paramtypes", [])
], StudentFilterComponent);
export { StudentFilterComponent };
//# sourceMappingURL=student-filter.component.js.map