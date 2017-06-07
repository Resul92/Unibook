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
var UniversitySortComponent = (function () {
    function UniversitySortComponent() {
        this.select = new EventEmitter();
    }
    UniversitySortComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('sort is alive');
        $(this.sel.nativeElement).on('change', function (e) {
            console.log('Change made -- ngAfterViewInit');
            _this.onChange(e);
        });
    };
    UniversitySortComponent.prototype.onChange = function (value) {
        console.log('Change made -- onChange');
        this.select.emit(value);
    };
    return UniversitySortComponent;
}());
__decorate([
    ViewChild('sel'),
    __metadata("design:type", ElementRef)
], UniversitySortComponent.prototype, "sel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversitySortComponent.prototype, "select", void 0);
UniversitySortComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'university-sort',
        templateUrl: 'university-sort.component.html'
    }),
    __metadata("design:paramtypes", [])
], UniversitySortComponent);
export { UniversitySortComponent };
//# sourceMappingURL=university-sort.component.js.map