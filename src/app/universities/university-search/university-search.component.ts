import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UniversityService } from '../../shared/university.service';

import { University } from '../../shared/university.model';

@Component({
	
	selector: "university-search",
	templateUrl: 'university-search.component.html',
})

export class UniversitySearchComponent implements OnInit, OnChanges {
	universitiesObservable: Observable<University[]>;
	@Input() universities: University[];
	private searchTerms = new Subject<string>();
	@Output() update = new EventEmitter();
	anyErrors : Error;
	@Input() allUniversities: University[];

	constructor(
		private universityService: UniversityService,
		private router: Router) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		// if the term is empty, get the default list of universities from the database
		if (term == ''){
			this.update.emit(this.allUniversities);
		} else {
			this.universities = this.allUniversities;
			//console.log("this universities in search: ", this.universities);
			this.universities = this.universities.filter(uni => uni.name.toLowerCase().search(term.toLowerCase()) != -1);
			//console.log("this universities in search AFTER searching: ", this.universities);
			//this.searchTerms.next(term);
			this.update.emit(this.universities);
		}
	}

	getUniversities(): void {
		this.universityService.getUniversities(1)
		.then(universities => {
			this.universities = universities;
			this.update.emit(this.universities);
		});
	}
	ngOnInit(): void {
		//this.allUniversities = this.universities;
	}
	ngOnChanges(){
		//console.log('universities in search component: ', this.universities);
	}
	gotoDetail(university: University): void {
		let link = ['/detail', university.id];
		this.router.navigate(link);
	}
}