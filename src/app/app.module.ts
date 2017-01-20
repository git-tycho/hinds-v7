import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { JobsAccordionComponent } from './jobs-accordion/jobs-accordion.component';
import { ApplyFormComponent } from '../apply-form.component';

@NgModule({
  declarations: [ AppComponent, routingComponents, JobsAccordionComponent, ApplyFormComponent ],
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule, AppRoutingModule, AccordionModule.forRoot() ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
