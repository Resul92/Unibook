import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { StudentService } from '../../shared/student.service';

import { Student } from '../../shared/student.model';

@Component({
	
	selector: "student-search",
	templateUrl: 'student-search.component.html',
})

export class StudentSearchComponent implements OnInit {
	studentsObservable: Observable<Student[]>;
	@Input() students: Student[];
	private searchTerms = new Subject<string>();
	@Output() update = new EventEmitter();
	anyErrors : Error;
 	@Input() allStudents: Student[];

	constructor(
		private studentService: StudentService,
		private router: Router) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		// if the term is empty, get the default list of students from the database
		if (term == ''){
			this.update.emit(this.allStudents);
		} else {
			this.searchTerms.next(term);
		}
	}

	getStudents(): void {
		this.studentService.getRealStudents(1)
			.then(students => {
				console.log(this.students);
				this.update.emit(students);
			});
	}
	ngOnInit(): void {
		this.allStudents = this.students;
		this.studentsObservable = this.searchTerms
			.debounceTime(30) // wait for 300ms pause in events
			.distinctUntilChanged() // ignore if next search term is same as previous
			.switchMap(term => term // switch to new observable each time
				//return the Student search observable
				? this.studentService.searchReal(term)
				//or observable of empty Students if no search term
				: Observable.of<Student[]>([]))
			.catch(error => {
				// TODO: real error handling
				console.log(error);
				return Observable.of<Student[]>([]);
			});
		let subscription = this.studentsObservable.subscribe(
			value => {
				this.update.emit(value);
			},
			error => this.anyErrors = error
		);
	}

	gotoDetail(student: Student): void {
		let link = ['/detail', student.id];
		this.router.navigate(link);
	}
}