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
var core_1 = require('@angular/core');
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, orderField) {
        array.sort(dynamicSort(orderField));
        return array;
    };
    SortPipe.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    SortPipe = __decorate([
        core_1.Pipe({
            name: 'sort'
        }),
        core_1.Pipe({ name: 'orderBy' }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;
//# sourceMappingURL=sort.pipe.js.map