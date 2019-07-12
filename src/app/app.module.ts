import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PwdPatternValidatorDirective } from './template-form/pwd-pattern-validator.directive';
import { PwdMismatchValidatorDirective } from './template-form/pwd-mismatch-validator.directive';
import { MismatchValidatorDirective } from './template-form/mismatch-validator.directive';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ServicesModule } from './services/services.module';
import { OutputDemoComponent } from './component-interaction/output-demo/output-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    PwdPatternValidatorDirective,
    PwdMismatchValidatorDirective,
    MismatchValidatorDirective,
    ComponentCommunicationComponent,
    OutputDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    ServicesModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
