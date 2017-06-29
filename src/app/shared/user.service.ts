// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
// importing services for mapping? - wouldn't that create a circular dependency?
import 'rxjs/add/operator/toPromise';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';

@Injectable()
export class UserService {
    private loggedIn = false;
    private currentUserURL;
    public currentUser: any;
    private currentUserRole;
    private currentUserRoleId;
    public redirectUrl;
    public modules;
    private applicationsUrl;
    private modulesUrl;
    private subModulesUrl; 
    private currentLanguage: ReplaySubject<string> = new ReplaySubject<string>();

    constructor(
        private http: Http,
        private router: Router
    ) {}
    login(token, url) {
        localStorage.setItem('currentUser', JSON.stringify({ 
            token: token,
        }));
        console.log('old token:', JSON.parse(localStorage.getItem('currentUser')).token);
        console.log('new tokenL ', token);
        this.getCurrentUser().then(user => {
            this.router.navigate([url]);
        });
    }
    getCurrentLanguage(): ReplaySubject<string>{
        //console.log('res responses is: ', res);
        return this.currentLanguage;    
    }
    setCurrentLanguage(lang): void{
        this.currentLanguage.next(lang);     
        console.log('set the currentLanguage to: ', this.currentLanguage);     
    }
    getLanguages(): Promise<any>{
        let languages = ["az", "en", "ru"];    
        let res = new Promise<any>((resolve, reject) => {
            console.log('languages in getLanguages: ', languages);
            resolve(languages);
        });
        console.log('res responses is: ', res);
        return res;
    }
    getToken(): Promise<any>{
        let res = new Promise<any>((resolve, reject) => {
            console.log('token in getToken: ', JSON.parse(localStorage.getItem('currentUser')));
            resolve(JSON.parse(localStorage.getItem('currentUser')).token);
        });
        console.log('res responses is: ', res);
        return res;
    }
    //get applications list to be shown in the header
    getApplications(): Promise<any>{
        return this.getToken().then(token =>{
            this.applicationsUrl = `http://192.168.1.78:8082/ROS/applications?token=${token}`;
            console.log('applicationsUrl: ', this.applicationsUrl);        
            return this.http.get(this.applicationsUrl)
            .toPromise()
            .then(response => {
                console.log('response.json().data for getting applications', response.json().data);
                return this.mapApplications(response, token);
            })
            .catch(this.handleError);
        });
    }
    mapApplications(response, token){
       return response.json().data.map(application => this.toApplication(application, token));
    }
    toApplication(r:any, token){
        let application = {
            name: r.shortName,
            url: r.url,
            imgUrl : `assets/img/application-icons/${r.id}.png`
        }
        return application;
    }
    //get applications list to be shown in the header
    getModules(): Promise<any>{
        return this.getToken().then(token =>{
            this.modulesUrl = `http://192.168.1.78:8082/ROS/applications/1000003/modules?token=${token}`;
            console.log('modulesUrl: ', this.modulesUrl);        
            return this.http.get(this.modulesUrl)
            .toPromise();
            /* - I have no idea why it's not working - as soon as I use return, it empties the array
            .then(response => response.json().data
                //console.log('response.json().data for getting modules', response.json().data);
                //return this.mapModules(response, token);
            )*/
        });
    }
    mapModules(response, token): Array<any>{
       // console.log('response.json().data: ',response.json().data);
       console.log('mapModules response: ', response.json().data);
       return response.json().data.map(mod => this.toModule(mod));
    }
    toModule(r:any): any{
        let mod = {
            name: r.name,
            id : r.id,
            active: true
        }
        //console.log(mod.name, mod.id);
        return mod;
    }
/*
            this.user.imgUrl = `http://192.168.1.78:8082/AdministrationRest/users/${user.id}/image?token=${token}`;
            //this.user = user;
            this.user.id = user.id;
            this.user.name = user.person.name + " " + user.person.patronymic + " " + user.person.surname;
            this.user.role = user.role.value;
            this.user.structure.name = user.structure.name;
            */
    //mapping returned data to teh shorter version of the user model used in the header
    toUser(r:any, token:any) {
        //iterate thorugh the properties of the object
        //if null, add empty to the property including the .value or whatever
        let user = ({
            id: r.id,
            name: r.person.name + " " + r.person.patronymic + " " + r.person.surname,
            role: r.role.value,
            structure: {
                name: r.structure.name,
                id: r.structure.id
            }
        });
      return user;
    }

    //mapping returned data to our model
    toUserDetail(r:any, token:any): User {
        //iterate thorugh the properties of the object
        //if null, add empty to the property including the .value or whatever
        let obj = this.setDefaults(r);
        let user = <User>({
            id: obj.id,
            name: obj.firstName + " " + r.middleName + " " + r.lastName,
            courseYear: 0, // unused for no, might change
            title: obj.status,// unused, but should remain
            universityId: 0,
            universityName: obj.orgName,
            birthday: obj.birthDate,
            gender: obj.gender.value,
            grade: obj.eduLevelId.value,
            status: obj.eduTypeId.value,
            jobStatus: '',// unused
            faculty: '', // to be added
            profession: obj.speciality[0].name,
            admissionScore: obj.score,
            bio: '', // unused, but should remain
            history: [],// unused, but should remain
            birthAddress: obj.addresses, // to be added
            currentAddress: obj.addresses, // to be added
            temporaryAddress: obj.addresses, // to be added
            phoneNumbers: obj.contacts,// to be added
            email: obj.contacts,// to be added
            facebook: obj.contacts,// to be added
            google: obj.contacts,// to be added
            imgUrl: `http://192.168.1.78:8082/UnibookHsisRest/students/${obj.id}/image?token=${token}`,
            coverImgUrl: `http://192.168.1.78:8082/UnibookHsisRest/students/${obj.id}/coverImage?token=${token}`,
            documents: obj.pelcDocuments, // to be adopted to the documents interface for properties to match
            subjects: [],// to be added LATER
            completedClasses: 0,// to be added LATER
            incompleteClasses: 0,// to be added LATER
            totalClasses: 0,// to be added LATER
            gpa: 0,// to be added LATER
            classes: []// to be added LATER
        });
      return user;
    }
    // setting default values to object properties in case 
    // might have to convert into a promise
    setDefaults(obj) {
        //console.log('setting defaults in: ', obj)
        //array of properties that require value
        let valueProperties = ["eduLevelId", "eduTypeId", "gender"];
        // let's only check for properties that we care about since they're theons that cause us errors
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
    // getting current user from the back-end
    getCurrentUser(): Promise<any> {
        return this.getToken().then(token => {
            console.log('current user in local storage in getCurrentUser: ', token);
            this.currentUserURL = `http://192.168.1.78:8082/ROS/profile?token=${token}`;
            console.log('getCurrentUser from url: ', this.currentUserURL);
            return this.http.get(this.currentUserURL)
            .toPromise()
            .then(response => {
                // store username token in local storage to keep user logged in between page refreshes
                // setting token in localStorage AFTER checking whether it's an authorized token
                if (response.json().data){
                    let data = response.json().data;
                    localStorage.setItem('currentUser', JSON.stringify({ 
                        token: token,
                        structure: data.structure//,
                        //name: data.person.name + data.person.patronymic
                    }));
                    console.log('token, current user response', token, this.currentUserURL, response.json().data);
                    // getting user's modules
                    //this.getModules().then(modules => this.modules = modules);
                    // need to find the module if where the parentid is 0
                    // initial navigation based on role id - no longer needed, might need to switch to navigating based on module id...
                    //this.currentUserRoleId = this.currentUser.role.id;
                    // check the user role
                    //this.currentUserRole = this.currentRole(this.currentUserRoleId);
                    //this.redirectUrl = this.setRedirectUrl(this.currentUserRoleId);
                    //this.navigateTo(this.currentUserRoleId);
                    //console.log('current user role:', this.currentUserRole);
                    //set the user logged in variable to true
                    //this.loggedIn = true;
                    //console.log('set the user logged in variable');
                    return this.toUser(response.json().data, token);
                } else {
                    console.log('current user response', response);
                    // redirect to login if there's something wrong with login
                    //window.location.href='http://192.168.1.78:8082/';
                }
            })
            // handle errors - for now, just print them to the console
            .catch(this.handleError);
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
        //window.location.href='http://192.168.1.78:8082/';
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
// needs to be changed to be determined by the module id?
    /*
    currentRole(roleId) {
        if (roleId != null ) {
            console.log('current roleId ', roleId); 
            if (roleId == 1000020) {
                return "superAdmin";
            } else if (roleId == 1000029) {
                return "teacher";
            } else if ( roleId == 1000043) {
                return "student";
            } else {
                this.currentUserRole = "ERROR: unrecognized";
                this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
            }
        } else {
            console.log('the roleID is null, do not have the user');
        }
    }  
    // neds to be determined by module id and send to either dashboard or students list or teachers list
    setRedirectUrl(roleId) {
        if (roleId == 1000020) {
            return 'dashboard';
         } else if (roleId == 1000029) {
            return `/teacher/${this.currentUser.id}`;
        } else if ( roleId == 1000043) {
            return `/student/${this.currentUser.id}`;
        } else {
            this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
        }
    }
    // I'm not sure about thse two methods - I think they may be doing the same shit
    navigateTo(roleId) {
        console.log('hello from navigate to method');
        if (roleId == 1000020) {
            this.router.navigate(['dashboard']);
        } else if (roleId == 1000029) {
            this.router.navigate([`teacher`, this.currentUser.id]);
        } else if ( roleId == 1000043) {
            this.router.navigate([`student`, this.currentUser.id]);
        } else {
            this.router.navigate(['192.168.1.78:8082/ROS/login?app=1000004']);
        }
    }*/
}