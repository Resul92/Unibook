var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { University } from '../../shared/university.model';
var UniversityAsideComponent = (function () {
    function UniversityAsideComponent() {
        this.select = new EventEmitter();
        this.gotoDetail = new EventEmitter();
        this.filterStudents = new EventEmitter();
        this.filterTeachers = new EventEmitter();
    }
    UniversityAsideComponent.prototype.onChange = function (value) {
        this.select.emit(value);
    };
    UniversityAsideComponent.prototype.ngOnInit = function () {
        var maleChecked = true;
        var femaleChecked = true;
    };
    UniversityAsideComponent.prototype.ngAfterViewInit = function () {
        // checking if the current state has initialised
        if (this.currentState) {
            //the element will only be created at the appropriate
            if (this.currentState == 'students-list' || this.currentState == 'teachers-list') {
                $(".student-faculty").select2();
            }
        }
    };
    UniversityAsideComponent.prototype.toggleFemale = function () {
        this.femaleChecked = !this.femaleChecked;
        if (this.currentState == "students-list") {
            this.filterStudentsBy('gender', this.genderFilter());
        }
        else if (this.currentState == "teachers-list") {
            this.filterTeachersBy('gender', this.genderFilter());
        }
    };
    UniversityAsideComponent.prototype.toggleMale = function () {
        this.maleChecked = !this.maleChecked;
        if (this.currentState == "students-list") {
            this.filterStudentsBy('gender', this.genderFilter());
        }
        else if (this.currentState == "teachers-list") {
            this.filterTeachersBy('gender', this.genderFilter());
        }
    };
    UniversityAsideComponent.prototype.genderFilter = function () {
        if (this.femaleChecked && this.maleChecked) {
            return 'all';
        }
        else if (this.femaleChecked) {
            return 'qadin';
        }
        else if (this.maleChecked) {
            return 'kishi';
        }
    };
    UniversityAsideComponent.prototype.goChild = function (child) {
        this.gotoDetail.emit(child);
    };
    UniversityAsideComponent.prototype.sortBy = function (property) {
        if (this.university.departments) {
            console.log('sortBy in the dashboard component started, trying to sort by: ', property);
            this.university.departments.sort(this.dynamicSort(property));
        }
    };
    UniversityAsideComponent.prototype.filterStudentsBy = function (property, value) {
        this.currentFilter = value;
        this.filterStudents.emit({ property: property, value: value });
    };
    UniversityAsideComponent.prototype.filterTeachersBy = function (property, value) {
        this.currentFilter = value;
        this.filterTeachers.emit({ property: property, value: value });
    };
    UniversityAsideComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    return UniversityAsideComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], UniversityAsideComponent.prototype, "university", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UniversityAsideComponent.prototype, "currentState", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversityAsideComponent.prototype, "select", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversityAsideComponent.prototype, "gotoDetail", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversityAsideComponent.prototype, "filterStudents", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], UniversityAsideComponent.prototype, "filterTeachers", void 0);
UniversityAsideComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'university-aside',
        templateUrl: 'university-aside.component.html'
    }),
    __metadata("design:paramtypes", [])
], UniversityAsideComponent);
export { UniversityAsideComponent };
//# sourceMappingURL=university-aside.component.js.map