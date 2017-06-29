import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import '../rxjs-extensions';

import { University } from './university.model';
import { Department } from './department.model';
import { Specialty } from './specialty.model';
import { Faculty } from './faculty.model';
import { UserService } from './user.service';

@Injectable()
export class UniversityService {
	private universitiesUrl = 'app/universities'; // URL to web api
	private realUniversitiesUrl;
	private headers = new Headers({'Content-Type': 'application/json'});
	private realUniversityByIdUrl;
	private realDepartmentByIdUrl;
	private realFacultyByIdUrl;
	private realSpecialtyByIdUrl;
	private realUniversityStatsUrl;
	private uniLogoUrl;
	private uniCoverUrl;
	private searchUrl;
	private subModulesList: string = '';
	public universities: ReplaySubject<any> = new ReplaySubject(1);

	constructor(private http: Http,
		private userService: UserService) { }
	/// connect to the real api
	getUniversities(page, subModules?): Promise<any> {
		if(subModules){ this.subModulesList = subModules};
		return this.userService.getToken().then(token =>{
			console.log('current user token: ', token);			
	 		this.realUniversitiesUrl = `http://192.168.1.78:8082/UnibookHsisRest/structures/type/U?token=${token}&page=${page}&pageSize=50`;
			console.log('getting real structures list from', this.realUniversitiesUrl);		
			return this.http.get(this.realUniversitiesUrl)
			.toPromise()
			.then(response => {
				console.log('structures-list response.json().data', response.json().data);
				return this.mapUnis(response, token);
			})
			.catch(this.handleError);
		});
	}
	getUniversityById(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realUniversityByIdUrl = `http://192.168.1.78:8082/UnibookHsisRest/structures/${id}?token=${token}`;		
			console.log('realUniversityByIdURL', this.realUniversityByIdUrl);
			return this.http.get(this.realUniversityByIdUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for getting university by id', response.json().data);
				return this.toUniDetail(response.json().data, token);
			})
            .catch(this.handleError);
		});
	}
	// gets a list of faculties that belong to a specific university id
	getDepartmentById(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realDepartmentByIdUrl	= `http://192.168.1.78:8082/UnibookHsisRest/structures/org/${id}/type/K?token=${token}`
			//console.log('current user token: ', token);
			console.log('gettind departments list from: ', this.realDepartmentByIdUrl);
			return this.http.get(this.realDepartmentByIdUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for getting department by id', response.json().data);
				return this.mapDepartments(response, token);
			})
            .catch(this.handleError);
		});
	}
	// gets a list of faculties that belong to a specific university id
	getFacultyById(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realFacultyByIdUrl	= `http://192.168.1.78:8082/UnibookHsisRest/structures/org/${id}/type/F?token=${token}`
			//console.log('current user token: ', token);
			console.log('gettind faculties list from: ', this.realFacultyByIdUrl);
			return this.http.get(this.realFacultyByIdUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for getting faculty by id', response.json().data);
				return this.mapFaculties(response, token);
			})
            .catch(this.handleError);
		});
	}
	// gets a list of faculties that belong to a specific university id
	getSpecialtyById(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realSpecialtyByIdUrl	= `http://192.168.1.78:8082/UnibookHsisRest/structures/org/${id}/type/I?token=${token}`
 			//console.log('current user token: ', token);
			console.log('gettind specialties list from: ', this.realSpecialtyByIdUrl);
			return this.http.get(this.realSpecialtyByIdUrl)
			.toPromise()
			.then(response => {
 				console.log('response.json().data for getting specialty by id', response.json().data);
				return this.mapSpecialties(response, token);
			})
            .catch(this.handleError);
		});
	}
	getUniversityStats(id): Promise<any> {
		return this.userService.getToken().then(token =>{
			this.realUniversityStatsUrl = `http://192.168.1.78:8082/ReportingRest/reports/org/${id}?token=${token}`;
			console.log('realUniversityStatsURL', this.realUniversityStatsUrl);
			return this.http.get(this.realUniversityStatsUrl)
			.toPromise()
			.then(response => {
				console.log('response.json().data for university/department/kafedra/specialty by id', response.json().data);
				return response.json().data;
			})
            .catch(this.handleError);
		});
	}
	mapUnis(response:Response, token: string): University[]{
	   // The response of the API hwith the results
	   if(response.json().data.lenght === 0) {
			return [];
	   } else {
		   return response.json().data.map(uni => this.toUni(uni, token));
	   }
	}
	mapDepartments(response:Response, token: string): University[]{
	   // The response of the API has a results
	   // property with the actual results
	   return response.json().data.map(uni => this.toDepartment(uni, token));
	}
	mapFaculties(response:Response, token: string): University[]{
	   // The response of the API has a results
	   // property with the actual results
	   return response.json().data.map(uni => this.toFaculty(uni, token));
	}
	mapSpecialties(response:Response, token: string): University[]{
	   // The response of the API has a results
	   // property with the actual results
	   return response.json().data.map(uni => this.toSpecialty(uni, token));
	}
	// the mapping function used in the dashboard because there's less information and inconsistent variable names
	toDepartment(r:any, token: any): Department{
		let department = <Department>({
			id: r.id,
			name: r.name
		});
		return department;
	}
	// the mapping function used in the dashboard because there's less information and inconsistent variable names
	toFaculty(r:any, token: any): Faculty{
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let faculty = <Faculty>({
			id: r.id,
			name: r.name
		});
		return faculty;
	}
	// the mapping function used in the dashboard because there's less information and inconsistent variable names
	toSpecialty(r:any, token: any): Specialty{
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let specialty = <Specialty>({
			id: r.id,
			name: r.name
		});
		return specialty;
	}
	// the mapping function used in the dashboard because there's less information and inconsistent variable names
	toUni(r:any, token: any): University{
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let obj = this.setDefaults(r);
		let uni = <University>({
			id: obj.id,
			name: obj.name,
			studentCount: obj.studentCount,
			teacherCount: obj.employeeCount,
			street: obj.address,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/structures/${obj.id}/logo?token=${token}`
		});
		return uni;
	}
	//to Uni mapping function that's used in the detail view
	toUniDetail(r:any, token: any): University{
		//iterate thorugh the properties of the object
		//if null, add empty to the property including the .value or whatever
		let obj = this.setDefaults(r);
		let uni = <University>({
			id: obj.id,
			name: obj.name,
			info: obj.about,
			studentCount: obj.studentCount,
			teacherCount: obj.employeeCount,
			street: obj.address,
			imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/structures/${obj.id}/logo?token=${token}`,
			coverImgUrl: `http://192.168.1.78:8082/UnibookHsisRest/structures/${obj.id}/cover?token=${token}`,	
			rektorName: obj.rectorName,
			buildingCount: obj.structureInfo.buildingCount,
			commonArea: obj.structureInfo.commonArea,
			eduLabArea: obj.structureInfo.eduLabArea,
			sportArea: obj.structureInfo.sportArea,
			campusArea: obj.structureInfo.campusArea,
			pcCount: obj.structureInfo.pcCount,
			departmentCount: obj.fakulteCount
		});
		return uni;
	}
	// setting default values to object properties in case 
	// might have to convert into a promise
	setDefaults(obj) {
		//console.log('setting defaults in: ', obj)
		//array of properties  in universities that require 
		let simpleProperties = ["name", "about", "address"]
		// let's only check for properties that we care about
		for (var i = 0; i < simpleProperties.length; i++){
			let property = simpleProperties[i];
		// if the obj.propert in array of the ones we need value fo
			if (obj[property] === null && simpleProperties.indexOf(property) > -1 ) {
				//console.log(property, "equal null");
				obj[property] = {az : null};
			}
		}
		//console.log('object after setting defaults: ', obj)
		return obj;
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}