var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserService } from './user.service';
var TeacherService = (function () {
    function TeacherService(http, userService) {
        this.http = http;
        this.userService = userService;
        // test url
        this.teachersUrl = 'app/teachers'; // URL to web api
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        //private authToken = localStorage.getItem('token');
        this.authToken = this.userService.token;
        this.realTeachersByUniUrl = "http://192.168.1.78:8082/UnibookHsisRest/structures?token=" + this.authToken;
        this.realTeachersUrl = "http://192.168.1.78:8082/UnibookHsisInfoRest/employees?token=" + this.authToken;
    }
    //////////// need to build methods that would successfully 
    /// connectto the real api
    TeacherService.prototype.getRealTeachers = function () {
        var _this = this;
        console.log('getting real teachers url', this.realTeachersUrl);
        // getting teacher from the backend
        return this.http.get(this.realTeachersUrl)
            .toPromise()
            .then(function (response) {
            console.log('getRealTeachers response.json().data', response.json().data);
            return _this.mapTeachers(response);
        })
            .catch(this.handleError);
    };
    TeacherService.prototype.getRealTeachersByUniversityId = function () {
        var _this = this;
        // getting teacher from the backend
        return this.http.get(this.realTeachersByUniUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data', response.json().data);
            return _this.mapTeachers(response);
        })
            .catch(this.handleError);
    };
    TeacherService.prototype.mapTeachers = function (response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().data.map(this.toTeacher);
    };
    TeacherService.prototype.toTeacher = function (r) {
        var teacher = ({
            id: 0,
            name: r.name,
            courseYear: 0,
            title: '',
            universityId: 0,
            universityName: r.university,
            birthday: '',
            gender: '',
            grade: r.academicDegree,
            status: '',
            jobStatus: '',
            faculty: r.department,
            profession: r.academicName,
            admissionScore: 0,
            bio: '',
            history: [],
            birthAddress: '',
            currentAddress: '',
            temporaryAddress: '',
            phoneNumbers: [],
            email: '',
            facebook: '',
            google: '',
            imgUrl: r.picture,
            coverImgUrl: '',
            documents: [],
            subjects: [],
            completedClasses: 0,
            incompleteClasses: 0,
            totalClasses: 0,
            gpa: 0,
            classes: []
        });
        // console.log('Parsed teacher:', teacher);
        return teacher;
    };
    TeacherService.prototype.getRealTeacherById = function (id) {
        var _this = this;
        this.realTeacherByIdUrl = "http://192.168.1.78:8082/UnibookHsisRest/teachers/" + id + "?token=" + this.getToken();
        console.log('realTeacherByIdURL', this.realTeacherByIdUrl);
        return this.http.get(this.realTeacherByIdUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data for getting teacher by id', response.json().data);
            return _this.toTeacher(response.json().data);
        });
    };
    TeacherService.prototype.getToken = function () {
        return this.userService.getToken();
    };
    /////////////////// used for testing purposes
    TeacherService.prototype.getTeachers = function () {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http.get(this.teachersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TeacherService.prototype.getTeacher = function (id) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.getTeachers()
            .then(function (teachers) { return teachers.find(function (teacher) { return teacher.id === id; }); });
    };
    TeacherService.prototype.getTeacherByProperty = function (property, value) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http.get(this.teachersUrl)
            .toPromise()
            .then(function (response) { return response.json().data.filter(function (teacher) {
            return teacher[property] == value;
        }); })
            .catch(this.handleError);
    };
    TeacherService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TeacherService.prototype.search = function (term) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .get("app/teachers/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    return TeacherService;
}());
TeacherService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        UserService])
], TeacherService);
export { TeacherService };
//# sourceMappingURL=teacher.service.js.map