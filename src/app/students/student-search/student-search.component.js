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
import { StudentService } from '../../shared/student.service';
var StudentSearchComponent = (function () {
    function StudentSearchComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.searchTerms = new Subject();
        this.update = new EventEmitter();
    }
    // Push a search term into the observable stream.
    StudentSearchComponent.prototype.search = function (term) {
        // if the term is empty, get the default list of students from the database
        if (term == '') {
            this.getStudents();
        }
        else {
            this.searchTerms.next(term);
        }
    };
    StudentSearchComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents()
            .then(function (students) {
            _this.students = students.slice(0, 15);
            _this.update.emit(_this.students);
        });
    };
    StudentSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentsObservable = this.searchTerms
            .debounceTime(30) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.studentService.search(term)
            : Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable.of([]);
        });
        var subscription = this.studentsObservable.subscribe(function (value) {
            _this.update.emit(value);
        }, function (error) { return _this.anyErrors = error; });
    };
    StudentSearchComponent.prototype.gotoDetail = function (student) {
        var link = ['/detail', student.id];
        this.router.navigate(link);
    };
    return StudentSearchComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], StudentSearchComponent.prototype, "update", void 0);
StudentSearchComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: "student-search",
        templateUrl: 'student-search.component.html',
    }),
    __metadata("design:paramtypes", [StudentService,
        Router])
], StudentSearchComponent);
export { StudentSearchComponent };
//# sourceMappingURL=student-search.component.js.map