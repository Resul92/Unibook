var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef } from '@angular/core';
var InitializeDropdown = (function () {
    function InitializeDropdown(el) {
        this.el = el;
    }
    InitializeDropdown.prototype.ngAfterViewInit = function () {
        // Custom select
        $(this.el.nativeElement).each(function () {
            var classes = $(this).attr("class"), id = $(this).attr("id"), name = $(this).attr("name");
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function () {
                template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';
            $(this).wrap('<div class="custom-select-wrapper"></div>');
            $(this).hide();
            $(this).after(template);
        });
    };
    return InitializeDropdown;
}());
InitializeDropdown = __decorate([
    Directive({
        selector: '[myDropdown]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], InitializeDropdown);
export { InitializeDropdown };
//# sourceMappingURL=my-dropdown.directive.js.map