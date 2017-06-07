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
var MeetingsPostPanelComponent = (function () {
    function MeetingsPostPanelComponent() {
    }
    return MeetingsPostPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], MeetingsPostPanelComponent.prototype, "lesson", void 0);
MeetingsPostPanelComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'meetings-post-panel',
        templateUrl: 'meetings-post-panel.component.html'
    }),
    __metadata("design:paramtypes", [])
], MeetingsPostPanelComponent);
export { MeetingsPostPanelComponent };
//# sourceMappingURL=meetings-post-panel.component.js.map