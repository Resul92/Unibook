import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TeacherService } from '../../shared/teacher.service';

import { Teacher } from '../../shared/teacher.model';

@Component({
	
	selector: "teacher-search",
	templateUrl: 'teacher-search.component.html',
})

export class TeacherSearchComponent implements OnInit {
	teachersObservable: Observable<any>;
	@Input() teachers: Teacher[];
	private searchTerms = new Subject<string>();
	@Output() update = new EventEmitter();
	anyErrors : Error;
 	@Input() allTeachers: Teacher[];
	@Output() load = new EventEmitter();

	constructor(
		private teacherService: TeacherService,
		private router: Router) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		// if the term is empty, get the default list of teachers from the database
		if (term == ''){
			this.load.emit();
			this.update.emit(this.allTeachers);
		} else {
			this.load.emit();
			this.searchTerms.next(term);
		}
	}

	ngOnInit() {
		this.allTeachers = this.teachers;
		this.teachersObservable = this.searchTerms
			.debounceTime(30) // wait for 300ms pause in events
			.distinctUntilChanged() // ignore if next search term is same as previous
			.switchMap(term => term // switch to new observable each time
				//return the teacher search observable
				? this.teacherService.searchReal(term)
				//or observable of empty teachers if no search term
				: Observable.of<Teacher[]>([]))
			.catch(error => {
				// TODO: real error handling
				console.log(error);
				return Observable.of<Teacher[]>([]);
			});
		let subscription = this.teachersObservable.subscribe(
			value => {
				let teachers: Teacher[] = value.list;
				this.update.emit(teachers);
			},
			error => this.anyErrors = error
			);
	}

	gotoDetail(teacher: Teacher): void {
		let link = ['/detail', teacher.id];
		this.router.navigate(link);
	}
}