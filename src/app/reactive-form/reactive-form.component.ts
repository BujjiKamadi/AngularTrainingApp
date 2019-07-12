import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { pwdPatternValidator, samePwdValidator, samePwdValidator1, requiredValidator } from './Validations';
import { MessageService } from 'primeng/api';
import { ComponentCommunicationComponent } from '../component-communication/component-communication.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
  providers: [MessageService]
})
export class ReactiveFormComponent implements OnInit {
  @ViewChild(ComponentCommunicationComponent, {static: false}) compCommu : ComponentCommunicationComponent;
  filteredStates: any[];
  statesList: any[];
  countriesList: any[];
  coursesList: any[];
  languagesList: any[];
  addressCheckedVal = false;
  registrationForm: FormGroup;
  displayJsonBool = false;
  formRecords: any[] = [];
  tableColumns: any[];
  @ViewChild(ComponentCommunicationComponent, { static: true }) ComponentCommun: ComponentCommunicationComponent;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.statesList = this.ComponentCommun.getStatesList();
    this.countriesList = this.ComponentCommun.getCountriesList();
    this.coursesList = this.ComponentCommun.getCoursesList();
    this.languagesList = this.ComponentCommun.getLanguagesList();
    
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(20)]],
      lastName: ['', [requiredValidator]],
      dateOfBirth: [''],
      gender: [''],
      state: [''],
      branch: [''],
      password: ['', [pwdPatternValidator()]],
      cnfrmPwd: [''],
      pinCode: [''],
      courses: [''],
      country: [''],
      hobbies: [''],
      email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com')],
      adhaarNumber: [''],
      languages: [''],
      additionalInfo: [''],
      sameAddressDecide: [''],
      address: this.fb.group({
        permanentDrNo: [''],
        permanentStreetName: [''],
        presentDrNo: [''],
        presentStreetName: ['']
      })
    }, { validators: samePwdValidator1 });
    console.log(this.registrationForm);
    console.log(Object.keys(this.registrationForm.controls));
    // for(str of Object.keys(this.registrationForm.controls)){

    // }
    this.tableColumns = [
      { header: 'First Name', field: 'firstName' },
      { header: 'Last Name', field: 'lastName' },
      { header: 'dateOfBirth', field: 'dateOfBirth' },
      { header: 'gender', field: 'gender' },
      { header: 'branch', field: 'branch' },
      { header: 'password', field: 'password' },
      { header: 'cnfrmPwd', field: 'cnfrmPwd' },
      { header: 'pinCode', field: 'pinCode' },
      { header: 'hobbies', field: 'hobbies' },
      { header: 'email', field: 'email' },
      { header: 'adhaarNumber', field: 'adhaarNumber' },
      { header: 'languages', field: 'languages' },
      { header: 'additionalInfo', field: 'additionalInfo' },
      { header: 'sameAddressDecide', field: 'sameAddressDecide' }
      // { header: 'state', field: 'state'},
      // { header: 'permanentDrNo', field: 'permanentDrNo'},
      // { header: 'permanentStreetName', field: 'permanentStreetName'},
      // { header: 'presentDrNo', field: 'presentDrNo'},
      // { header: 'presentStreetName', field: 'presentStreetName'},
      // { header: 'courses', field: 'courses'},
      // { header: 'country', field: 'country'},
    ];
  }
  filterStatesOnComplete(event) {
    this.filteredStates = this.filterStates(event.query, this.statesList);
  }
  filterStates(query, states: any[]): any[] {
    let filtered: any[] = [];
    for (let state of states) {
      if (state.stateName.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(state);
      }
    }
    return filtered;
  }
  displayJson(): void {
    console.log(this.registrationForm);
    this.displayJsonBool = !this.displayJsonBool;
    this.compCommu.displayedJsonDataInChild(this.displayJsonBool);
  }
  resetFormData(): void {
    this.registrationForm.reset();
  }
  addFormDataToTable(): void {
    this.formRecords.push(this.registrationForm.value);
    console.log(this.formRecords);
  }
  onFormSubmit() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
  }
}

