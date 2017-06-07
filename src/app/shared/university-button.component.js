"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HeroButtonComponent = (function () {
    function HeroButtonComponent() {
        this.change = new EventEmitter();
    }
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], HeroButtonComponent.prototype, "change", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], HeroButtonComponent.prototype, "label", void 0);
    HeroButtonComponent = __decorate([
        Component({
            selector: 'toh-hero-button',
            template: "<button>{{label}}</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroButtonComponent);
    return HeroButtonComponent;
}());
exports.HeroButtonComponent = HeroButtonComponent;
//# sourceMappingURL=hero-button.component.js.map