var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
var RemainderPercentagePipe = (function () {
    function RemainderPercentagePipe() {
    }
    RemainderPercentagePipe.prototype.transform = function (value) {
        return (100 - value);
    };
    return RemainderPercentagePipe;
}());
RemainderPercentagePipe = __decorate([
    Pipe({ name: 'remainderPercentage' }),
    __metadata("design:paramtypes", [])
], RemainderPercentagePipe);
export { RemainderPercentagePipe };
//# sourceMappingURL=remainder-percentage.pipe.js.map