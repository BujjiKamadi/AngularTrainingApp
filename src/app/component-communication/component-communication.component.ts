import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {
  @Input() reactiveFormGroup: FormGroup;
  @Input() reactiveDisplayJsonStatus: boolean;
  @Input() templateDrivenFormData: FormGroup;
  @Input() tempateDrivenDisplayJsonStatus: boolean;

  states: any[] = [
    { stateID: 1, stateName: 'Andhra Pradesh' },
    { stateID: 2, stateName: 'ArunaChal Pradesh' },
    { stateID: 3, stateName: 'Telangana' },
    { stateID: 4, stateName: 'Tamil Nadu' },
    { stateID: 5, stateName: 'Kerala' },
    { stateID: 6, stateName: 'Bihar' },
  ];
  countries: any[] = [
    { counrtyName: 'Australia', counrtyCode: 'AU' },
    { counrtyName: 'Afghanistan', counrtyCode: 'AFG' },
    { counrtyName: 'Bangladesh', counrtyCode: 'BNG' },
    { counrtyName: 'Cambodia', counrtyCode: 'CBD' },
    { counrtyName: 'India', counrtyCode: 'IND' }
  ];
  courses: any[] = [
    { courseID: 10, courseName: 'Java' },
    { courseID: 10, courseName: 'Php' },
    { courseID: 10, courseName: 'Angular' },
    { courseID: 10, courseName: 'Sql Server' },
    { courseID: 10, courseName: 'Dot Net' },
  ];
  languages: any[] = [
    { label: 'Telugu', value: 'Telugu' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Malayam', value: 'Malayam' }
  ];
  constructor(private messageService: MessageService) { }

  ngOnInit() {  
  }

  displayedJsonDataInChild(status:boolean): void{
    if(status){
      this.messageService.add({ severity: 'success', summary: 'Success Message from child component', detail: 'Reactive form data is displayed successfully in child component' });
    }
  }
  getStatesList(): any[]{
    return this.states;
  }
  getCountriesList(): any[]{
    return this.countries;
  }
  getCoursesList(): any[]{
    return this.courses;
  }
  getLanguagesList(): any[]{
    return this.languages;
  }
}
