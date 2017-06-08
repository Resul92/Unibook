import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Teacher } from './teacher.model';
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
	constructor(
		private http: Http,
		private userService: UserService
		) { }

	//////////// need to build methods that would successfully 
	/// connectto the real api
	getRealTeachers(page): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.authToken = token;
	 		this.realTeachersUrl = `http://192.168.1.78:8082/UnibookHsisRest/teachers/tms?token=${token}&genderId=&orgId=&statusId=&subModuleId=1000050%2C1000051%2C1000062%2C1000061&page=${page}&pageSize=50`;
			// getting teachers from the backend
			console.log('getting real teachers url', this.realTeachersUrl, "token: ", token);
			return this.http.get(this.realTeachersUrl)
			.toPromise()
			.then(response => {
					console.log('getRealTeachers response.json().data', response.json().data);
					return this.mapTeachers(response, token);
			})
			.catch(this.handleError);
		});
	}
	getRealTeacherById(id) {
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
	getRealTeachersByUniversityId(id){
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
	mapTeachers(response:Response, token: string): Teacher[]{
		// The response of the API has a results
		// property with the actual results
		console.log('mapTeachers response: ', response.json());
		return response.json().data.teacherList.map(teacher => this.toTeacher(teacher, token));
	}
	toTeacher(r:any, token: any) {
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value.az or whatever
		let obj = this.setDefaults(r);
		let teacher = <any>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/teachers/${obj.id}/image?token=${token}`,
			jobStatus: obj.academicName,
			faculty: obj.department,
			subjects: obj.subjects
		});
		return teacher;
	}
	toTeacherDetail(r:any, token: any): Teacher {
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value.az or whatever
	  	//console.log('setting student:', r);
		let obj = this.setDefaults(r);
		let teacher = <Teacher>({
			id: obj.id,
			name: obj.firstName + " " + obj.middleName + " " + obj.lastName,
			courseYear: null, // not used
			title: obj.structure.value.az,// unused, but should remain
			universityId: obj.orgId,
			universityName: obj.orgName,
			birthday: obj.birthDate,
			gender: obj.gender.value.az,
			grade: obj.academicDegree,
			status: obj.status,
			jobStatus: obj.academicName,
			faculty: obj.department,
			profession: obj.position, 
			admissionScore: null,
			bio: obj,// unused, but should remain
			history: obj.academicActivitys,// unused, but should remain
			birthAddress: obj.addresses,// to be added
			currentAddress: obj.addresses,// to be added
			temporaryAddress: obj.addresses,// to be added
			phoneNumbers: obj.contacts,// to be added
			email: obj.contacts,// to be added - turn contacts to an array and add them as a list in the template
			facebook: obj.contacts,// to be added
			google: obj.contacts,// to be added
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
	  	//console.log('Parsed student:', teacher);
		return teacher;
	}
	// setting default values to object properties in case 
	// might have to convert into a promise
	setDefaults(obj) {
		//console.log('setting defaults in: ', obj)
		//array of properties that require value.az
		let valueProperties = ["structure", "gender"];
		// let's only check for properties that we care about
		for (var i = 0; i < valueProperties.length; i++){
			let property = valueProperties[i];
		// if the obj.propert in array of the ones we need value fo
			if (obj[property] === null && valueProperties.indexOf(property) > -1) {
				console.log(property, "equal null");
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
				this.mapTeachers(r, this.authToken);
				console.log('response: ', r);
		});
	}
}