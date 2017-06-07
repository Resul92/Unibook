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
import { UserService } from './user.service';
var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // need to get a redirect URL or the object entirely from a getter method that returns a promise?
        this.user = this.userService.currentUser;
        if (this.user = null) {
            this.userService.getCurrentUser()
                .then(function (user) { return _this.user = user; });
        }
        console.log('lookup result for the current user is', this.user);
        // perhaps get user by id would make more sense?		
        /*this.userService.getCurrentUser()
        .then(user => {
            this.user = user;
            console.log('this user: ', user);
            this.redirectUrl = this.userService.setRedirectUrl(this.user.role.id);

        });		*/
        //this.userService.getCurrentUser
        //.then(this.redirectUrl = this.userService.redirectUrl);
        //console.log('redirect url is: ', this.redirectUrl);
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'custom-header',
        templateUrl: 'header.component.html'
    }),
    __metadata("design:paramtypes", [UserService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map