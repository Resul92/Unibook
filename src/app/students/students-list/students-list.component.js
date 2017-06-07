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
import { University } from '../../shared/university.model';
var StudentsListComponent = (function () {
    function StudentsListComponent() {
        this.select = new EventEmitter();
        this.oldStudentsArray = [];
    }
    StudentsListComponent.prototype.ngDoCheck = function () {
        for (var i in this.students) {
            if (this.oldStudentsArray.length == this.students.length) {
                console.log('old students', this.oldStudentsArray);
                console.log('new students', this.students);
                if (this.students[i] !== this.oldStudentsArray[i]) {
                    console.log("change detected");
                    this.oldStudentsArray = this.students;
                    return;
                }
            }
        }
    };
    StudentsListComponent.prototype.search = function (results) {
        this.students = results;
    };
    StudentsListComponent.prototype.onSortChange = function (value) {
        this.select.emit(value);
    };
    return StudentsListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], StudentsListComponent.prototype, "university", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], StudentsListComponent.prototype, "students", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StudentsListComponent.prototype, "select", void 0);
StudentsListComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'students-list',
        templateUrl: 'students-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], StudentsListComponent);
export { StudentsListComponent };
//# sourceMappingURL=students-list.component.js.map