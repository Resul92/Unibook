import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { University } from './university.model';

declare var $:any;
declare var select2;
declare var Chart:any;

@Component({
	
	selector: 'student-charts',
	template: ''
})
export class StudentChartsComponent { 
	@Input() studentStats;

	ngAfterViewInit() {
		var studentType = document.getElementById("studentTypeChart");
		var studentTypeChart = new Chart(studentType, {
		    type: 'doughnut',
		    data: {
		        labels: ["Eyani", "Qiyabi"],
		        datasets: [{
		            data: [this.studentStats.eyani, this.studentStats.qiyabi],
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
		    	animation:{
			        animateScale:true
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
		            data: [this.studentStats.bakalavr, this.studentStats.doktorant, this.studentStats.magistr],
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
		    	animation:{
			        animateScale:true
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
		            data: [this.studentStats.maleStudents, this.studentStats.femaleStudents],
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
		    	animation:{
			        animateScale:true
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
	}
}