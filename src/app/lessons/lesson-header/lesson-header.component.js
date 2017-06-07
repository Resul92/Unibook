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
var LessonHeaderComponent = (function () {
    function LessonHeaderComponent() {
        this.select = new EventEmitter();
    }
    // event emitting method that changes the state in the parent component of lesson-main 
    // it gets called from nav buttons that control the in-page navigation
    LessonHeaderComponent.prototype.navSelect = function (value) {
        this.select.emit(value);
    };
    return LessonHeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], LessonHeaderComponent.prototype, "currentState", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LessonHeaderComponent.prototype, "lesson", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LessonHeaderComponent.prototype, "states", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], LessonHeaderComponent.prototype, "select", void 0);
LessonHeaderComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'lesson-header',
        templateUrl: 'lesson-header.component.html'
    }),
    __metadata("design:paramtypes", [])
], LessonHeaderComponent);
export { LessonHeaderComponent };
//# sourceMappingURL=lesson-header.component.js.map