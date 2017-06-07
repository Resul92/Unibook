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
var TeachersListComponent = (function () {
    function TeachersListComponent() {
        this.select = new EventEmitter();
        this.oldTeachersArray = [];
    }
    // detecting array change when filter or sort triggered but probably useless
    TeachersListComponent.prototype.ngDoCheck = function () {
        for (var i in this.teachers) {
            if (this.oldTeachersArray.length == this.teachers.length) {
                console.log('old teachers', this.oldTeachersArray);
                console.log('new teachers', this.teachers);
                if (this.teachers[i] !== this.oldTeachersArray[i]) {
                    console.log("change detected");
                    this.oldTeachersArray = this.teachers;
                    return;
                }
            }
        }
    };
    TeachersListComponent.prototype.search = function (results) {
        this.teachers = results;
    };
    TeachersListComponent.prototype.onSortChange = function (value) {
        this.select.emit(value);
    };
    return TeachersListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], TeachersListComponent.prototype, "university", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TeachersListComponent.prototype, "teachers", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TeachersListComponent.prototype, "select", void 0);
TeachersListComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teachers-list',
        templateUrl: 'teachers-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], TeachersListComponent);
export { TeachersListComponent };
//# sourceMappingURL=teachers-list.component.js.map