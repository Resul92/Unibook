var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var UniversityFormComponent = (function () {
    function UniversityFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.submitted = false;
        this.active = true;
    }
    UniversityFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    UniversityFormComponent.prototype.newUniversity = function () {
        var _this = this;
        // this.model = new university(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return UniversityFormComponent;
}());
UniversityFormComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'university-form',
        templateUrl: 'university-form.component.html'
    }),
    __metadata("design:paramtypes", [])
], UniversityFormComponent);
export { UniversityFormComponent };
//# sourceMappingURL=university-form.component.js.map