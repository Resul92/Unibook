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
import { ActivatedRoute, Router } from '@angular/router';
// Import User model here Import User from user.model
import { UserService } from './user.service';
import { UniversityService } from './university.service';
var AuthComponent = (function () {
    function AuthComponent(userService, universityService, route, router) {
        this.userService = userService;
        this.universityService = universityService;
        this.route = route;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.token = params['token'];
            console.log('token in auth component is', _this.token);
            _this.userService.login(_this.token);
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'auth',
        template: '<p>Loading...</p>'
    }),
    __metadata("design:paramtypes", [UserService,
        UniversityService,
        ActivatedRoute,
        Router])
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map