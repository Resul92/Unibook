var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Teacher } from '../../shared/teacher.model';
var TeacherPlanPanelComponent = (function () {
    function TeacherPlanPanelComponent() {
    }
    return TeacherPlanPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Teacher)
], TeacherPlanPanelComponent.prototype, "teacher", void 0);
TeacherPlanPanelComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-plan-panel',
        templateUrl: 'teacher-plan-panel.component.html'
    }),
    __metadata("design:paramtypes", [])
], TeacherPlanPanelComponent);
export { TeacherPlanPanelComponent };
//# sourceMappingURL=teacher-plan-panel.component.js.map