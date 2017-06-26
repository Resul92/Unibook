//custom pipe for getting the first letters of a string containing multiple words
// used in teachers-list, teacher-grade-panel and student-gade-panel
import { Pipe } from '@angular/core';

@Pipe({
	name : "translate"
})
 
export class TranslatePipe{
	transform(value, term){
		if(value){
			if(typeof value == "string"){
				return value;
			}else {
				return value[term];
			}
		}
	}
}