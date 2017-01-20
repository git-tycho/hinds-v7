import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'apply-form',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Apply Now</h2>
    <form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">

    <div class="field">
      <label for="jobid">Job reference</label>
      <input type="text" id="jobid" placeholder="JobID" [formControl]="myForm.controls['jobid']">
    </div>
    <div class="field">
      <label for="name">Full name</label>
      <input type="text" id="name" placeholder="Your full name" [formControl]="myForm.controls['name']">
    </div>
    <div class="field">
      <label for="email">Email address</label>
      <input type="email" id="email" placeholder="Your email address" [formControl]="myForm.controls['email']">
    </div>
    <div class="field">
      <label for="phone">Phone number</label>
      <input type="text" id="phone" placeholder="Your phone number" [formControl]="myForm.controls['phone']">
    </div>

    <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
export class ApplyFormComponent implements OnInit {
  @Input() id: string;
  myForm: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('ID: ', this.id);
    this.myForm = this.fb.group({
      'jobid': [{value: this.id, disabled: true}],
      'name': [''],
      'email': [''],
      'phone': [''],
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
