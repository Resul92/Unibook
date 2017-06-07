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
import { UniversityService } from '../../shared/university.service';
var UniversitySearchComponent = (function () {
    function UniversitySearchComponent(universityService, router) {
        this.universityService = universityService;
        this.router = router;
        this.searchTerms = new Subject();
        this.update = new EventEmitter();
    }
    // Push a search term into the observable stream.
    UniversitySearchComponent.prototype.search = function (term) {
        // if the term is empty, get the default list of universities from the database
        if (term == '') {
            this.getUniversities();
        }
        else {
            this.searchTerms.next(term);
        }
    };
    UniversitySearchComponent.prototype.getUniversities = function () {
        var _this = this;
        this.universityService.getUniversities()
            .then(function (universities) {
            _this.universities = universities.slice(0, 15);
            _this.update.emit(_this.universities);
        });
    };
    UniversitySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.universitiesObservable = this.searchTerms
            .debounceTime(30) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.universityService.search(term)
            : Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable.of([]);
        });
        var subscription = this.universitiesObservable.subscribe(function (value) {
            _this.update.emit(value);
        }, function (error) { return _this.anyErrors = error; });
    };
    UniversitySearchComponent.prototype.gotoDetail = function (university) {
        var link = ['/detail', university.id];
        this.router.navigate(link);
    };
    return UniversitySearchComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversitySearchComponent.prototype, "update", void 0);
UniversitySearchComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: "university-search",
        templateUrl: 'university-search.component.html',
    }),
    __metadata("design:paramtypes", [UniversityService,
        Router])
], UniversitySearchComponent);
export { UniversitySearchComponent };
//# sourceMappingURL=university-search.component.js.map