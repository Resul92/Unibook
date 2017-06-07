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
var CustomMasonryComponent = (function () {
    function CustomMasonryComponent() {
    }
    CustomMasonryComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            // init Isotope
            var grid = document.querySelector('.grid');
            var msnry = new Masonry(grid, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true
            });
            imagesLoaded(grid).on('progress', function () {
                // layout Masonry after each image loads
                msnry.layout();
            });
        });
    };
    return CustomMasonryComponent;
}());
CustomMasonryComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'custom-masonry',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], CustomMasonryComponent);
export { CustomMasonryComponent };
//# sourceMappingURL=custom-masonry.component.js.map