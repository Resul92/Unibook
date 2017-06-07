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
var StudentService = (function () {
    function StudentService(http, userService) {
        this.http = http;
        this.userService = userService;
        //test url
        this.studentsUrl = 'app/students'; // URL to web api
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.authToken = this.userService.token;
        this.realStudentsByUniUrl = "http://192.168.1.78:8082/UnibookHsisRest/students?token=" + this.authToken;
        this.realStudentsUrl = "http://192.168.1.78:8082/UnibookHsisInfoRest/students?token=" + this.authToken;
    }
    //////////// need to build methods that would successfully 
    /// connect to the real api
    StudentService.prototype.getRealStudents = function () {
        var _this = this;
        // getting teacher from the backend
        console.log('getting real students url', this.realStudentsUrl);
        return this.http.get(this.realStudentsUrl)
            .toPromise()
            .then(function (response) {
            console.log('getRealStudents response.json().data', response.json().data);
            return _this.mapStudents(response);
        })
            .catch(this.handleError);
    };
    StudentService.prototype.getRealStudentsByUniversityId = function () {
        var _this = this;
        return this.http.get(this.realStudentsByUniUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data for getting students by university id', response.json().data);
            return _this.mapStudents(response);
        })
            .catch(this.handleError);
    };
    StudentService.prototype.mapStudents = function (response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().data.map(this.toStudent);
    };
    StudentService.prototype.toStudent = function (r) {
        var student = ({
            id: r.id,
            name: r.name,
            courseYear: r.course,
            title: '',
            universityId: 0,
            universityName: '',
            birthday: '',
            gender: '',
            grade: '',
            status: '',
            jobStatus: '',
            faculty: '',
            profession: r.specialty,
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
        //console.log('Parsed student:', student);
        return student;
    };
    StudentService.prototype.getRealStudentById = function (id) {
        var _this = this;
        this.realStudentByIdUrl = "http://192.168.1.78:8082/UnibookHsisRest/students/" + id + "?token=" + this.getToken();
        console.log('realStudnetByIdURL', this.realStudentByIdUrl);
        return this.http.get(this.realStudentByIdUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data for getting student by id', response.json().data);
            return _this.toStudent(response.json().data);
        });
    };
    StudentService.prototype.getToken = function () {
        return this.userService.getToken();
    };
    /////////////////// used for testing purposes using internal api
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents()
            .then(function (students) { return students.find(function (student) { return student.id === id; }); });
    };
    StudentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StudentService.prototype.getStudentByProperty = function (property, value) {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data.filter(function (student) {
            return student[property] == value;
        }); })
            .catch(this.handleError);
    };
    StudentService.prototype.search = function (term) {
        return this.http
            .get("app/students/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    StudentService.prototype.searchReal = function (term) {
        return this.http
            .get("http://192.168.1.78:8082/AdministrationRest/users/search?keyWord=" + term + "&token=" + this.authToken)
            .map(function (r) { return r.json().data; });
    };
    return StudentService;
}());
StudentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        UserService])
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map