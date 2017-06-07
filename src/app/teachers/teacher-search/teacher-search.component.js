var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TeacherService } from '../../shared/teacher.service';
var TeacherSearchComponent = (function () {
    function TeacherSearchComponent(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.searchTerms = new Subject();
        this.update = new EventEmitter();
    }
    // Push a search term into the observable stream.
    TeacherSearchComponent.prototype.search = function (term) {
        // if the term is empty, get the default list of teachers from the database
        if (term == '') {
            this.getTeachers();
        }
        else {
            this.searchTerms.next(term);
        }
    };
    TeacherSearchComponent.prototype.getTeachers = function () {
        var _this = this;
        this.teacherService.getTeachers()
            .then(function (teachers) {
            _this.teachers = teachers.slice(0, 15);
            _this.update.emit(_this.teachers);
        });
    };
    TeacherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teachersObservable = this.searchTerms
            .debounceTime(30) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.teacherService.search(term)
            : Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable.of([]);
        });
        var subscription = this.teachersObservable.subscribe(function (value) {
            _this.update.emit(value);
        }, function (error) { return _this.anyErrors = error; });
    };
    TeacherSearchComponent.prototype.gotoDetail = function (teacher) {
        var link = ['/detail', teacher.id];
        this.router.navigate(link);
    };
    return TeacherSearchComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], TeacherSearchComponent.prototype, "update", void 0);
TeacherSearchComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: "teacher-search",
        templateUrl: 'teacher-search.component.html',
    }),
    __metadata("design:paramtypes", [TeacherService,
        Router])
], TeacherSearchComponent);
export { TeacherSearchComponent };
//# sourceMappingURL=teacher-search.component.js.map