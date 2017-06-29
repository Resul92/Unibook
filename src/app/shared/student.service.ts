import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import { Student, Document, Contact, Address } from './student.model';
import { UserService } from './user.service';
import { HelperService } from './helper.service';

@Injectable()
export class StudentService {
	//test url
	private studentsUrl = 'app/students'; // URL to internal web api
	private headers = new Headers({'Content-Type': 'application/json'});
	private realStudentsByUniUrl;
	private realStudentByIdUrl;
	private realStudentPersonal;
	private realStudentFamily;
	private realStudentContacts;
	private authToken;
	private realStudentDocs;
	private subModulesList: string = `1000048,1000047,1000058,1000059,1000057,1000046`;
	public students : ReplaySubject<any> = new ReplaySubject(1);
	private orgId;

	constructor(
		private http: Http,
		private userService: UserService
		) { }

	//////////// need to build methods that would successfully 
	/// connect to the real api
	getStudents(page, subModules?, orgId?): Promise<any> {
		if(subModules){ this.subModulesList = subModules};
		if(orgId) { this.orgId = orgId};
		return this.userService.getToken().then(token =>{
			this.authToken = token;
			// getting teachers from the backend
	 		let realStudentsUrl = `http://192.168.1.78:8082/UnibookHsisRest/students/tms?token=${token}&subModuleId=${this.subModulesList}&orgId=${this.orgId}&page=${page}&pageSize=50`;
			console.log('getting real students url', realStudentsUrl);		
			return this.http.get(realStudentsUrl)
			.toPromise()
			.then(response => {
				console.log('getStudents response', response.json());
				return this.mapStudents(response, token);
			})
			.catch(this.handleError);
		});
	}
	getStudentById(id): Promise<any>  {
		return this.userService.getToken().then(token =>{
			this.realStudentByIdUrl = `http://192.168.1.78:8082/UnibookHsisRest/students/${id}?token=${token}`;
			console.log('realStudentByIdURL', this.realStudentByIdUrl);
			return this.http.get(this.realStudentByIdUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for getting student by id', response.json().data);
				return this.toStudentDetail(response.json().data, token);
			})
            .catch(this.handleError);
		});
	}
	getStudentsByUniversityId(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realStudentsByUniUrl = `http://192.168.1.78:8082/UnibookHsisRest/students?token=${token}&orgId=${id}&subModuleId=1000048%2C1000047%2C1000058%2C1000059%2C1000057%2C1000046`;
			return this.http.get(this.realStudentsByUniUrl)
			.toPromise()
			.then(response => {
					console.log('response.json().data for getting students by university id', response.json().data);
					return this.mapStudents(response, token);
			})
			.catch(this.handleError);
		});
	}
	mapStudents(response:Response, token: string) {
		console.log('mapStudents response data: ', response.json().data);
		console.log('token in mapStudents: ', token)
		if(response.json().data.studentCount === 0){
			return [];
		} else {
			let list;
			if(response.json().data.list){
				list = response.json().data.list.map(student => this.toStudent(student, token));
			} else {
				list = response.json().data.studentList.map(student => this.toStudent(student, token));
			}
			let allStudents = response.json().data.allStudents;
			let bakalavr = response.json().data.bakalavr;
			let doktorant = response.json().data.doktorant;
			let magistr = response.json().data.magistr;
			let paidStudents = response.json().data.odenisli;
			let unpaidStudents = response.json().data.odenissiz;
			let eyani = response.json().data.eyani;
			let qiyabi = response.json().data.qiyabi;
			let maleStudents = response.json().data.kisi;
			let femaleStudents = response.json().data.qadin;
			return {
				list: list,
				allStudents: allStudents,
				bakalavr: bakalavr,
				doktorant: doktorant,
				magistr: magistr,
				paidStudents: paidStudents,
				unpaidStudents: unpaidStudents,
				eyani: eyani,
				qiyabi: qiyabi,
				maleStudents: maleStudents,
				femaleStudents: femaleStudents
			};
		}
	}
	toStudent(r:any, token:any):Student {
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let obj = this.setDefaults(r);
		let student = <any>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			status: obj.eduTypeId.value,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/students/${obj.id}/image?token=${token}`,
			grade: obj.eduLevelId.value,
			universityName: obj.orgName,
			profession: obj.specialty,
			faculty: null // to be added
		});
		return student;
	}
	toStudentDetail(r:any, token:any): Student{
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let obj = this.setDefaults(r);
		let student = <Student>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			courseYear: null, // unused for no, might change
		    title: obj.status,// unused, but should remain
			universityId: null,
			universityName: obj.orgName,
			birthday: obj.birthDate,
			gender: obj.gender.value,
			grade: obj.eduLevelId.value,
			status: obj.eduTypeId.value,
			jobStatus: null,// unused
			faculty: null, // to be added
			profession: obj.speciality[0].name,
			admissionScore: obj.score,
			bio: null, // unused, but should remain
			history: null,// unused, but should remain
			addresses: obj.addresses,
			contacts: obj.contacts,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/students/${obj.id}/image?token=${token}`,
			coverImgUrl: `http://192.168.1.78:8082/UnibookHsisRest/students/${obj.id}/coverImage?token=${token}`,
			documents: obj.pelcDocuments, // to be adopted to the documents interface for properties to match
			subjects: null,// to be added LATER
			completedClasses: null,// to be added LATER
			incompleteClasses: null,// to be added LATER
			totalClasses: null,// to be added LATER
			gpa: null,// to be added LATER
			classes: null// to be added LATER
		});
		student.documents = student.documents.map(doc => this.toDoc(doc));
		student.contacts = student.contacts.map(contact => this.toContact(contact));
		student.addresses = student.addresses.map(contact => this.toAddress(contact));

	  //console.log('Parsed student:', student.id);
	  return student;
	}
	toDoc(document): Document{
		let doc: Document = {
			id: document.id,
			series: document.serial,
			date: document.createDate,
			type: document.type.value
		}
		return doc;
	}
	toContact(contact): Contact {
		let cont: Contact = {
			name: contact.type.value,
			address: contact.contact
		}
		return cont;
	}
	toAddress(addr): Address {
		let adr: Address = {
			name: addr.name,
			value: addr.type.value
		}
		return adr;
	}
	// setting default values to object properties in case 
	// might have to convert into a promise
	// this is going to be a speed efficiency bottleneck
	setDefaults(obj) {
		//console.log('setting defaults in: ', obj)
		//array of properties  in universities that require 
		let simpleProperties = ["specialty"]
		//array of properties that require value
		let valueProperties = ["eduLevelId", "eduTypeId", "gender"];
		// let's only check for properties that we care about
		for (var i = 0; i < simpleProperties.length; i++){
			let property = simpleProperties[i];
		// if the obj.propert in array of the ones we need value fo
			if (obj[property] === null && simpleProperties.indexOf(property) > -1 ) {
				//console.log(property, "equal null");
				obj[property] = {az : null};
			}
		}
		for (var i = 0; i < valueProperties.length; i++){
			let property = valueProperties[i];
		// if the obj.propert in array of the ones we need value fo
			if (obj[property] === null && valueProperties.indexOf(property) > -1) {
				//console.log(property, "equal null");
				obj[property] = {value: {az : null}};
			}
		}
		//console.log('object after setting defaults: ', obj)
		return obj;
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
	searchReal(term: string): Observable<Student[]> {
		let searchUrl = `http://192.168.1.78:8082/UnibookHsisRest/students?token=${this.authToken}&keyword=${term}&genderId=1000035&orgId=&uniName=&uniOrg=&statusId=&status=&actionTypeId=&genderName=&actionName=&statusName=&subModuleId=1000048%2C1000047%2C1000058%2C1000059%2C1000057%2C1000046`;
		console.log('getting students for', term," from ", searchUrl);
		return this.http.get(searchUrl).map((r: Response) => {
			console.log(r.json());
			return this.mapStudents(r, this.authToken);
		});
	}
}

