import { Component, OnInit } from '@angular/core';

import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Employee(1, "Alin", "0721690919");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newEmployee(): void {
    console.log('New employee submittet')
    //Call Service to save the new Employee

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
