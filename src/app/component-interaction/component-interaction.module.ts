import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [OutputDemoComponent, ParentComponent],
  imports: [
    CommonModule
  ],
  exports: [OutputDemoComponent]
})
export class ComponentInteractionModule { }
