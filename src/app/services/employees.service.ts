import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees(): any[]{
    return [
      { ID: 4401, Name: 'BujjiKamadi', Location: 'Kakinada', Designation: 'Software Trainee'},
      { ID: 4402, Name: 'LakshmiKrishna', Location: 'Annavaram', Designation: 'Java Developer'},
      { ID: 4403, Name: 'SaiPrasanna', Location: 'Guntur', Designation: 'Dotnet Developer'},
      { ID: 4404, Name: 'Kishore', Location: 'Hyderabad', Designation: 'Php Developer'},
      { ID: 4405, Name: 'Jyoshna', Location: 'Bheemili', Designation: 'Java Developer'},
      { ID: 4406, Name: 'Prasad', Location: 'Nellore', Designation: 'Dotnet Developer'},
      { ID: 4407, Name: 'Pavan', Location: 'Vijayawada', Designation: 'Software Trainee'},
      { ID: 4408, Name: 'Giridhar', Location: 'Warangal', Designation: 'Php Developer'},
      { ID: 4409, Name: 'Sowjanya', Location: 'Guntur', Designation: 'Java Developer'},
    ];
  }
}
