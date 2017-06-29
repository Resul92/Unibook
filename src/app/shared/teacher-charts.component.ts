import { Component, Input, AfterViewInit } from '@angular/core';
import { University } from './university.model';

declare var $:any;
declare var select2;
declare var Chart:any;

@Component({
	
	selector: 'teacher-charts',
	template: ''
})
export class TeacherChartsComponent { 
	@Input() teacherStats;

	ngAfterViewInit() {
		console.log('teacher stats', this.teacherStats);
		var teacherType = document.getElementById("teacherTypeChart");
		var teacherTypeChart = new Chart(teacherType, {
		    type: 'pie',
		    data: {
		        labels: ["Esas Heyet", "Statdan Kenar"],
		        datasets: [{
		            data: [this.teacherStats.mainEmployees, this.teacherStats.nonStateEmployees],
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
		var teacherGrade = document.getElementById("teacherGradeChart");
		var teacherGradeChart = new Chart(teacherGrade, {
		    type: 'pie',
		    data: {
		        labels: ["Bakalavr", "Doktorant", "Magistr"],
		        datasets: [{
		            data: [this.teacherStats.bakalavr, this.teacherStats.doktorant, this.teacherStats.magistr],
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
		var teacherGender = document.getElementById("teachergenderChart");
		var teachergenderChart = new Chart(teacherGender, {
		    type: 'pie',
		    data: {
		        labels: ["Kishi", "Qadin"],
		        datasets: [{
		            data: [this.teacherStats.maleEmployees, this.teacherStats.femaleEmployees],
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