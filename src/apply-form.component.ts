import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './apply.interface';

@Component({
  selector: 'apply-form',
  template: `
    <form novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">
      <label>
        <span>Job Reference:</span>
        <input type="text" formControlName="jobid">
      </label>
      <label>
        <span>Full name</span>
        <input type="text" placeholder="Your full name" formControlName="name">
      </label>
      <div class="error" *ngIf="user.get('name').touched && user.get('name').hasError('required')">
        Name is required
      </div>
      <div class="error" *ngIf="user.get('name').touched && user.get('name').hasError('minlength')">
        Minimum of 2 characters
      </div>
      <label>
        <span>Email address</span>
        <input type="email" placeholder="Your email address" formControlName="email">
      </label>
      <div
        class="error"
        *ngIf="user.get('account').get('email').hasError('required') && user.get('account').get('email').touched">
        Email is required
      </div>
      <label>
        <span>Phone number</span>
        <input type="number" placeholder="Your phone number" formControlName="phone">
      </label>

      <button type="submit" [disabled]="user.invalid">Submit</button>
    </form>
  `
})
export class ApplyFormComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      jobid: ['22222'],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
