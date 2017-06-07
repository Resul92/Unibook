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
import '../rxjs-extensions';
import { UserService } from './user.service';
var UniversityService = (function () {
    function UniversityService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.universitiesUrl = 'app/universities'; // URL to web api
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    /// connect to the real api
    UniversityService.prototype.getRealUniversities = function () {
        var _this = this;
        this.authToken = this.userService.token;
        this.realUniversitiesUrl = "http://192.168.1.78:8082/UnibookHsisInfoRest/hschools?token=" + this.authToken;
        console.log('getting structures list from: ', this.realUniversitiesUrl);
        return this.http.get(this.realUniversitiesUrl)
            .toPromise()
            .then(function (response) {
            console.log('structures-list response.json().data', response.json().data);
            return _this.mapUnis(response);
        })
            .catch(this.handleError);
    };
    /* used to dynamically set url - don't need it now?
    realUniversityUrl(){
        this.authToken = this.userService.token;
        console.log('realUniversity URL in university.service ', `http://192.168.1.78:8082/UnibookHsisRest/structures?token=${this.authToken}`);
        return `http://192.168.1.78:8082/UnibookHsisRest/structures?token=${this.authToken}`;
    }*/
    UniversityService.prototype.mapUnis = function (response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().data.map(this.toUni);
    };
    // the mapping function used in the dashboard because there's less information and inconsistent variable names
    UniversityService.prototype.toUni = function (r) {
        var uni = ({
            // should be a dynamic property - but a static URL for now
            id: 1,
            name: r.name,
            studentCount: r.studentCount,
            teacherCount: r.teacherCount,
            street: r.address,
            imgUrl: r.logoUrl
        });
        //console.log('Parsed uni:', uni);
        return uni;
    };
    //to Uni mapping function that's used in the detail view
    UniversityService.prototype.toUniDetail = function (r) {
        var uni = ({
            // should be a dynamic property - but a static URL for now
            id: 1,
            name: r.name,
            info: r.about,
            studentCount: r.studentCount,
            teacherCount: r.teacherCount,
            street: r.address,
            imgUrl: r.pictureUrl,
            coverImgUrl: r.coverPictureUrl,
            rektorName: r.rectorName,
            buildingCount: r.buildingCount,
            commonArea: r.commonArea,
            eduLabArea: r.eduLabArea,
            sportArea: r.sportArea,
            campusArea: r.campusArea,
            pcCount: r.pcCount
        });
        //console.log('Parsed uni:', uni);
        return uni;
    };
    UniversityService.prototype.getRealUniversityById = function (id) {
        var _this = this;
        //previous url
        //this.realUniversityByIdUrl = `http://192.168.1.78:8082/UnibookHsisRest/structures/${id}?token=${this.getToken()}`;
        // the new url sent to me from Tural
        this.realUniversityByIdUrl = "http://192.168.1.78:8082/UnibookHsisInfoRest/hschools/" + id + "?token=" + this.getToken();
        console.log('realUniversityByIdURL', this.realUniversityByIdUrl);
        return this.http.get(this.realUniversityByIdUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data for getting student by id', response.json().data);
            return _this.toUniDetail(response.json().data);
        });
    };
    UniversityService.prototype.getRealUniversityStats = function (id) {
        //previous url
        //this.realUniversityByIdUrl = `http://192.168.1.78:8082/UnibookHsisRest/structures/${id}?token=${this.getToken()}`;
        // the new url sent to me from Tural
        this.realUniversityStatsUrl = "http://192.168.1.78:8082/UnibookHsisInfoRest/hschools/" + id + "/statistics?token=" + this.getToken();
        console.log('realUniversityStatsURL', this.realUniversityStatsUrl);
        return this.http.get(this.realUniversityStatsUrl)
            .toPromise()
            .then(function (response) {
            console.log('response.json().data for getting student by id', response.json().data);
            return response.json().data;
        });
    };
    UniversityService.prototype.getToken = function () {
        return this.userService.getToken();
    };
    //////////using inmemory web api for testing purposes before I get teh real api
    UniversityService.prototype.getUniversities = function () {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http.get(this.universitiesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UniversityService.prototype.getUniversity = function (id) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.getUniversities()
            .then(function (universities) { return universities.find(function (university) { return university.id === id; }); });
    };
    UniversityService.prototype.update = function (university) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        var url = this.universitiesUrl + "/" + university.id;
        return this.http
            .put(url, JSON.stringify(university), { headers: this.headers })
            .toPromise()
            .then(function () { return university; })
            .catch(this.handleError);
    };
    UniversityService.prototype.create = function (name) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .post(this.universitiesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UniversityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UniversityService.prototype.search = function (term) {
        this.headers.append('Authorization', "Bearer " + this.authToken);
        return this.http
            .get("app/universities/?name=" + term)
            .map(function (r) { return r.json().data; });
    };
    return UniversityService;
}());
UniversityService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        UserService])
], UniversityService);
export { UniversityService };
//# sourceMappingURL=university.service.js.map