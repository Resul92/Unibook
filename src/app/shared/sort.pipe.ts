//custom pipe for getting the first letters of a string containing multiple words
// used in teachers-list, teacher-grade-panel and student-gade-panel
import { Pipe } from '@angular/core';

@Pipe({
	name : "sort"
})
 
export class SortPipe {
	dynamicSort(property: string) {
	    var sortOrder = 1;
	    if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
	    return function (a,b) {
	        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
	    }
	}
	transform(value, term){
		if(term){
			let temp = value.sort(this.dynamicSort(term));
			console.log(temp);
			return temp;
		} else {
			console.log('no term in sort pipe');
			return value;
		}
	}
}