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
var StudentChartsComponent = (function () {
    function StudentChartsComponent() {
    }
    StudentChartsComponent.prototype.ngAfterViewInit = function () {
        var studentType = document.getElementById("studentTypeChart");
        var studentTypeChart = new Chart(studentType, {
            type: 'doughnut',
            data: {
                labels: ["Eyani", "Qiyabi"],
                datasets: [{
                        data: [this.university.eyaniStudentCount, this.university.qiyabiStudentCount],
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
                cutoutPercentage: 75,
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
        var studentGrade = document.getElementById("studentGradeChart");
        var studentGradeChart = new Chart(studentGrade, {
            type: 'doughnut',
            data: {
                labels: ["Bakalavr", "Doktorant", "Magistr"],
                datasets: [{
                        data: [this.university.bachelorStudentCount, this.university.doctorsStudentCount, this.university.mastersStudentCount],
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
                cutoutPercentage: 75,
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
        var studentGender = document.getElementById("studentgenderChart");
        var studentgenderChart = new Chart(studentGender, {
            type: 'doughnut',
            data: {
                labels: ["Kishi", "Qadin"],
                datasets: [{
                        data: [this.university.kishiStudentCount, this.university.qadinStudentCount],
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
                cutoutPercentage: 75,
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
    return StudentChartsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", University)
], StudentChartsComponent.prototype, "university", void 0);
StudentChartsComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'student-charts',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], StudentChartsComponent);
export { StudentChartsComponent };
//# sourceMappingURL=student-charts.component.js.map