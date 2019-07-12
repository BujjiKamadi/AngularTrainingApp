import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule,PrimengModule
  ],
  exports: [EmployeesListComponent]
})
export class ServicesModule { }
