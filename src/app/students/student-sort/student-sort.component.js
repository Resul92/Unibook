var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
var StudentSortComponent = (function () {
    function StudentSortComponent() {
        this.select = new EventEmitter();
    }
    StudentSortComponent.prototype.onChangeVal = function (value) {
        console.log('onChange value in student-sort component that we are emitting out is :', value);
        this.select.emit(value);
    };
    StudentSortComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(this.el.nativeElement).on('change', function (e, args) {
            _this.onChangeVal(args.selected);
        });
    };
    return StudentSortComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], StudentSortComponent.prototype, "select", void 0);
__decorate([
    ViewChild('sel'),
    __metadata("design:type", ElementRef)
], StudentSortComponent.prototype, "el", void 0);
StudentSortComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'student-sort',
        templateUrl: 'student-sort.component.html'
    }),
    __metadata("design:paramtypes", [])
], StudentSortComponent);
export { StudentSortComponent };
//# sourceMappingURL=student-sort.component.js.map