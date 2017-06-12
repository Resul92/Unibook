// The auth guard is used to prevent unauthenticated users from // accessing restricted routes, it's used in app.routing.ts to 
// protect the home page route.
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            console.log('logged in', JSON.parse(localStorage.getItem('currentUser')));
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        // send them to auth component / auth page
        console.log('not logged in');
        //window.location.href='http://192.168.1.78:8082/';
        return false;
    }
}