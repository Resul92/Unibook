//custom pipe for getting the first letters of a string containing multiple words
// used in teachers-list, teacher-grade-panel and student-gade-panel
import { Pipe } from '@angular/core';
 
@Pipe({
	name : "firstletters"
})
 
export class SearchPipe{
	transform(value, [term]){
		return value.filter(item => item.name.startsWith(term));
	}
}