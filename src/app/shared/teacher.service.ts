import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Teacher, Document, Contact, Address } from './teacher.model';
import { UserService } from './user.service';
import { HelperService } from './helper.service';

@Injectable()
export class TeacherService {
	// test url
	private teachersUrl = 'app/teachers'; // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});
	private realTeachersByUniUrl;;
	private realTeacherByIdUrl;
	private authToken;
	private realTeachersUrl;
	private subModulesList: string = `1000050, 1000051, 1000062, 1000061`;
	private orgId;
	constructor(
		private http: Http,
		private userService: UserService
		) { }

	//////////// need to build methods that would successfully 
	/// connectto the real api
	getTeachers(page, subModules?, orgId?): Promise<any> {
		if(subModules){ this.subModulesList = subModules};
		if(orgId) { this.orgId = orgId};
		return this.userService.getToken().then(token =>{
			this.authToken = token;
	 		this.realTeachersUrl = `http://192.168.1.78:8082/UnibookHsisRest/teachers/tms?token=${token}&genderId=&orgId=${this.orgId}&statusId=&subModuleId=${this.subModulesList}&page=${page}&pageSize=50`;
			// getting teachers from the backend
			console.log('getting real teachers url', this.realTeachersUrl, "token: ", token);
			return this.http.get(this.realTeachersUrl)
			.toPromise()
			.then(response => {
					console.log('getTeachers response.json().data', response.json().data);
					return this.mapTeachers(response, token);
			})
			.catch(this.handleError);
		});
	}
	getTeacherById(id) {
		return this.userService.getToken().then(token =>{
			this.realTeacherByIdUrl = `http://192.168.1.78:8082/UnibookHsisRest/teachers/${id}?token=${token}`;
			console.log('realTeacherByIdURL', this.realTeacherByIdUrl);
			return this.http.get(this.realTeacherByIdUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for getting teacher by id', response.json().data);
				return this.toTeacherDetail(response.json().data, token);
			})
            .catch(this.handleError);
		});
	}
	getTeachersByUniversityId(id){
		return this.userService.getToken().then(token =>{
			// getting teachers from the backend
			this.realTeachersByUniUrl = `http://192.168.1.78:8082/UnibookHsisRest/teachers?token=${token}&orgId=${id}&subModuleId=1000050%2C1000051%2C1000062%2C1000061`;
			return this.http.get(this.realTeachersByUniUrl)
			.toPromise()
			.then(response => {
					console.log('response.json().data', response.json().data);
					return this.mapTeachers(response, token);
			})
			.catch(this.handleError);
		});
	}
	mapTeachers(response:Response, token: string): any{
		// The response of the API has a results
		// property with the actual results
		console.log('mapTeachers response data: ', response.json().data);
		if(response.json().data.teacherCount === 0){
			return [];
		} else {
			let list;
			if(response.json().data.list){
				list = response.json().data.list.map(teacher => this.toTeacher(teacher, token));
			} else {
				list = response.json().data.employeeList.map(teacher => this.toTeacher(teacher, token));
			}
			let allEmployees = response.json().data.allEmployee;
			let mainEmployees = response.json().data.esasHeyet;
			let men = response.json().data.kisi;
			let women = response.json().data.qadin;
			let nonStateEmplyees = response.json().data.statdanKenar;
			return {
				list: list,
				allEmployees: allEmployees,
				mainEmployees: mainEmployees,
				maleEmployees: men,
				femaleEmployees: women,
				nonStateEmployees: nonStateEmplyees
			};
		}
	}
	toTeacher(r:any, token: any): Teacher {
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let obj = this.setDefaults(r);
		let teacher = <any>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/teachers/${obj.id}/image?token=${token}`,
			jobStatus: obj.academicName,
			faculty: obj.department,
			universityName: obj.orgName,
			title: obj.structure.value,// unused, but should remain
			subjects: obj.subjects
		});
		return teacher;
	}
	toTeacherDetail(r:any, token: any): Teacher {
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
	  	//console.log('setting student:', r);
		let obj = this.setDefaults(r);
		let teacher = <Teacher>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			courseYear: null, // not used
			title: obj.structure.value,// unused, but should remain
			universityId: obj.orgId,
			universityName: obj.orgName,
			birthday: obj.birthDate,
			gender: obj.gender.value,
			grade: obj.academicDegree,
			status: obj.status,
			jobStatus: obj.academicName,
			faculty: obj.department,
			profession: obj.position, 
			admissionScore: null,
			bio: obj,// unused, but should remain
			history: obj.academicActivitys,// unused, but should remain
			addresses: obj.addresses,
			contacts: obj.contacts,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/teachers/${obj.id}/image?token=${token}`,
			coverImgUrl: `http://192.168.1.78:8082/UnibookHsisRest/teachers/${obj.id}/image?token=${token}`,
			documents: obj.pwlcDocuments,
			subjects: obj.subjects,
			completedClasses: null,// to be added LATER
			incompleteClasses: null,// to be added LATER
			totalClasses: null,// to be added LATER
			gpa: null,// to be added LATER
			classes: null// to be added LATER? or duplicate of subjects? add languages? from r.languages
		});
		teacher.documents = teacher.documents.map(doc => this.toDoc(doc));
		teacher.contacts = teacher.contacts.map(contact => this.toContact(contact));
		teacher.addresses = teacher.addresses.map(contact => this.toAddress(contact));
	  	//console.log('Parsed student:', teacher);
		return teacher;
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
	setDefaults(obj) {
		//console.log('setting defaults in: ', obj)
		//array of properties that require value
		let valueProperties = ["structure", "gender"];
		// let's only check for properties that we care about
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
	searchReal(term: string): Observable<any> {
		let searchUrl = `http://192.168.1.78:8082/UnibookHsisRest/teachers?token=${this.authToken}&keyword=${term}&genderId=1000035&orgId=&uniName=&uniOrg=&statusId=&status=&actionTypeId=&genderName=&actionName=&statusName=&subModuleId=1000048%2C1000047%2C1000058%2C1000059%2C1000057%2C1000046`;
		console.log('getting teachers for', term," from ", searchUrl);
		return this.http
			.get(searchUrl)
			.map((r: Response) => {
				this.mapTeachers(r.json(), this.authToken);
				console.log('response: ', r);
		});
	}
}