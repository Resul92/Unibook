import { Component } from '@angular/core';

import { University } from '../../shared/university.model';

@Component({
	
	selector: 'university-form',
	templateUrl: 'university-form.component.html'
})

export class UniversityFormComponent {
	powers =  ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    submitted = false;
    active = true;

    onSubmit() { this.submitted = true; }

    newUniversity() {
       // this.model = new university(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}