import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <h2>Form group control</h2>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label>
        First Name:
        <input type="text" formControlName="firstName">
      </label>
      <label>
        Last Name:
        <input type="text" formControlName="lastName">
      </label>
      <div formGroupName="address">
        <h3>Address</h3>
        <label>
          Street:
          <input type="text" formControlName="street">
        </label>
        <label>
          City:
          <input type="text" formControlName="city">
        </label>
        <label>
          State:
          <input type="text" formControlName="state">
        </label>
        <label>
          Zip code:
          <input type="text" formControlName="zip">
        </label>
      </div>

      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <p>
      Values: {{ profileForm.value | json }}
    </p>

    <p>
      <button (click)="updateProfile()">Update Profile</button>
    </p>
  `,
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  /*profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });*/
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
