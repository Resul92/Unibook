"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TeacherChartsComponent = (function () {
    function TeacherChartsComponent() {
    }
    TeacherChartsComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            var teacherType = document.getElementById("teacherTypeChart");
            var teacherTypeChart = new Chart(teacherType, {
                type: 'pie',
                data: {
                    labels: ["Eyani", "Qiyabi"],
                    datasets: [{
                            data: [45, 123],
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
                            data: [45, 123, 321],
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
                            data: [2134, 4231],
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
        });
    };
    return TeacherChartsComponent;
}());
TeacherChartsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'teacher-charts',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], TeacherChartsComponent);
exports.TeacherChartsComponent = TeacherChartsComponent;
//# sourceMappingURL=custom-charts.component.js.map