var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// user.service.ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
// importing services for mapping? - wouldn't that create a circular dependency?
import 'rxjs/add/operator/toPromise';
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
    }
    UserService.prototype.getToken = function () {
        console.log('this.token: ', this.token);
        return this.token;
    };
    UserService.prototype.setToken = function (token) {
        this.token = token;
        console.log('this.token: ', this.token);
        // setting url to fetch the user's data from
        this.currentUserURL = "http://192.168.1.78:8082/ROS/profile?token=" + this.token;
        console.log('setting token in user service to: ', this.token);
    };
    UserService.prototype.login = function (token) {
        this.setToken(token);
        this.getCurrentUser();
        // redirect to the appropriate page
    };
    // getting current user from the back-end
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        console.log('getCurrentUser from url: ', this.currentUserURL);
        return this.http.get(this.currentUserURL)
            .toPromise()
            .then(function (response) {
            console.log('current user response.json().data', response.json().data);
            // save it locally
            _this.currentUser = response.json().data;
            // getting user's modules
            _this.getModules().then(function (modules) { return _this.modules = modules; });
            // need to find the module if where the parentid is 0
            _this.router.navigate(['dashboard']);
            // initial navigation based on role id - no longer needed, might need to switch to navigating based on module id...
            //this.currentUserRoleId = this.currentUser.role.id;
            // check the user role
            //this.currentUserRole = this.currentRole(this.currentUserRoleId);
            //this.redirectUrl = this.setRedirectUrl(this.currentUserRoleId);
            //this.navigateTo(this.currentUserRoleId);
            //console.log('current user role:', this.currentUserRole);
            //set the user logged in variable to true
            _this.loggedIn = true;
            console.log('set the user logged in variable');
        })
            .catch(this.handleError);
    };
    // needs to be changed to be determined by the module id?
    UserService.prototype.currentRole = function (roleId) {
        if (roleId != null) {
            console.log('current roleId ', roleId);
            if (roleId == 1000020) {
                return "superAdmin";
            }
            else if (roleId == 1000029) {
                return "teacher";
            }
            else if (roleId == 1000043) {
                return "student";
            }
            else {
                this.currentUserRole = "ERROR: unrecognized";
                this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
            }
        }
        else {
            console.log('the roleID is null, do not have the user');
        }
    };
    UserService.prototype.getModules = function () {
        this.moduleUrl = "http://192.168.1.78:8082/ROS/applications/1000004/modules?token=" + this.token;
        return this.http.get(this.moduleUrl)
            .toPromise()
            .then(function (response) {
            console.log('getModules response.json().data', response.json().data);
        })
            .catch(this.handleError);
    };
    // neds to be determined by module id and send to either dashboard or students list or teachers list
    UserService.prototype.setRedirectUrl = function (roleId) {
        if (roleId == 1000020) {
            return 'dashboard';
        }
        else if (roleId == 1000029) {
            return "/teacher/" + this.currentUser.id;
        }
        else if (roleId == 1000043) {
            return "/student/" + this.currentUser.id;
        }
        else {
            this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
        }
    };
    // I'm not sure about thse two methods - I think they may be doing the same shit
    UserService.prototype.navigateTo = function (roleId) {
        console.log('hello from navigate to method');
        if (roleId == 1000020) {
            this.router.navigate(['dashboard']);
        }
        else if (roleId == 1000029) {
            this.router.navigate(["teacher", this.currentUser.id]);
        }
        else if (roleId == 1000043) {
            this.router.navigate(["student", this.currentUser.id]);
        }
        else {
            this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
        }
    };
    UserService.prototype.logout = function () {
        this.token = "";
        this.loggedIn = false;
        this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Router])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map