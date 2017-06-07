var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output, Input } from '@angular/core';
var UniversitiesListComponent = (function () {
    function UniversitiesListComponent() {
        this.gotoInfo = new EventEmitter();
    }
    UniversitiesListComponent.prototype.goInfo = function (university) {
        this.gotoInfo.emit(university);
    };
    return UniversitiesListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], UniversitiesListComponent.prototype, "universities", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversitiesListComponent.prototype, "gotoInfo", void 0);
UniversitiesListComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'universities-list',
        templateUrl: 'universities-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], UniversitiesListComponent);
export { UniversitiesListComponent };
//# sourceMappingURL=universities-list.component.js.map