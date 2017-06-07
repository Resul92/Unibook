var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { University } from './university.model';
var TeacherChartsComponent = (function () {
    function TeacherChartsComponent() {
    }
    TeacherChartsComponent.prototype.ngAfterViewInit = function () {
        var teacherType = document.getElementById("teacherTypeChart");
        var teacherTypeChart = new Chart(teacherType, {
            type: 'pie',
            data: {
                labels: ["Eyani", "Qiyabi"],
                datasets: [{
                        data: [this.university.eyaniTeacherCount, this.university.qiyabiTeacherCount],
                        backgroundColor: [
                            'rgba(165,183,205,1)',
                            'rgba(46, 186, 238, 1)'
                        ],
                        hoverBackgroundColor: [
                            'rgba(165,183,205,1)',
                            'rgba(46, 186, 238, 1)'
                        ],
                        hoverBorderColor: [
                            'rgba(165,183,205,.4)',
                            'rgba(46, 186, 238, .4)'
                        ],
                        hoverBorderWidth: 3,
                        borderWidth: 2
                    }]
            },
            options: {
                cutoutPercentage: 0,
                animation: {
                    animateScale: true
                },
                legend: {
                    position: 'left',
                    labels: {
                        boxWidth: 12,
                        usePointStyle: true
                    }
                }
            }
        });
        var teacherGrade = document.getElementById("teacherGradeChart");
        var teacherGradeChart = new Chart(teacherGrade, {
            type: 'pie',
            data: {
                labels: ["Bakalavr", "Doktorant", "Magistr"],
                datasets: [{
                        data: [this.university.bachelorTeacherCount, this.university.doctorsTeacherCount, this.university.mastersTeacherCount],
                        backgroundColor: [
                            'rgba(165,183,205,1)',
                            'rgba(46, 186, 238, 1)',
                            'rgba(127, 210, 241, 1)'
                        ],
                        hoverBackgroundColor: [
                            'rgba(165,183,205,1)',
                            'rgba(46, 186, 238, 1)',
                            'rgba(127, 210, 241, 1)'
                        ],
                        hoverBorderColor: [
                            'rgba(165,183,205,.3)',
                            'rgba(46, 186, 238, .3)',
                            'rgba(127, 210, 241, .3)'
                        ],
                        hoverBorderWidth: 3,
                        borderWidth: 2
                    }]
            },
            options: {
                cutoutPercentage: 0,
                animation: {
                    animateScale: true
                },
                legend: {
                    position: 'left',
                    labels: {
                        boxWidth: 12,
                        usePointStyle: true
                    }
                }
            }
        });
        var teacherGender = document.getElementById("teachergenderChart");
        var teachergenderChart = new Chart(teacherGender, {
            type: 'pie',
            data: {
                labels: ["Kishi", "Qadin"],
                datasets: [{
                        data: [this.university.kishiTeacherCount, this.university.qadinTeacherCount],
                        backgroundColor: [
                            'rgba(124,255,209,1)',
                            'rgba(255, 153, 153, 1)'
                        ],
                        hoverBackgroundColor: [
                            'rgba(124,255,209,1)',
                            'rgba(255, 153, 153, 1)'
                        ],
                        hoverBorderColor: [
                            'rgba(124,255,209,.3)',
                            'rgba(255, 153, 153, .3)'
                        ],
                        hoverBorderWidth: 3,
                        borderWidth: 2
                    }]
            },
            options: {
                cutoutPercentage: 0,
                animation: {
                    animateScale: true
                },
                legend: {
                    position: 'left',
                    labels: {
                        boxWidth: 12,
                        usePointStyle: true
                    }
                }
            }
        });
    };
    return TeacherChartsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], TeacherChartsComponent.prototype, "university", void 0);
TeacherChartsComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'teacher-charts',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], TeacherChartsComponent);
export { TeacherChartsComponent };
//# sourceMappingURL=teacher-charts.component.js.map