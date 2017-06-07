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
var LessonMainComponent = (function () {
    function LessonMainComponent() {
        this.states = ['lesson-about', 'members-list', 'meeting', 'e-journal', 'final-journal', 'journal-add', 'journal-edit', 'meeting-files'];
    }
    LessonMainComponent.prototype.ngOnInit = function () {
        this.currentState = "lesson-about";
    };
    LessonMainComponent.prototype.setCurrentState = function (event) {
        this.currentState = event;
    };
    return LessonMainComponent;
}());
LessonMainComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'lesson-main',
        templateUrl: 'lesson-main.component.html'
    }),
    __metadata("design:paramtypes", [])
], LessonMainComponent);
export { LessonMainComponent };
//# sourceMappingURL=lesson-main.component.js.map