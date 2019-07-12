import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { EmployeesListComponent } from './services/employees-list/employees-list.component';

const routes: Routes = [
  { path : 'reactiveForms', component : ReactiveFormComponent},
  { path: 'templateDrivenForms', component: TemplateFormComponent},
  { path: 'compCommunication', component: ComponentCommunicationComponent},
  { path: 'employeeList', component: EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
