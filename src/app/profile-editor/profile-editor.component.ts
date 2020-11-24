import { Component } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <h2 class="mt-5 mb-3">Form group control</h2>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
        <label>
          First Name:
          <input class="form-control" type="text" formControlName="firstName" required>
        </label>
      <label>
        Last Name:
        <input class="form-control" type="text" formControlName="lastName" required>
      </label>
      <div formGroupName="address">
        <h3 class="mt-4 mb-3">Address</h3>
        <label>
          Street:
          <input class="form-control" type="text" formControlName="street">
        </label>
        <label>
          City:
          <input class="form-control" type="text" formControlName="city">
        </label>
        <label>
          State:
          <input class="form-control" type="text" formControlName="state">
        </label>
        <label>
          Zip code:
          <input class="form-control" type="text" formControlName="zip">
        </label>
      </div>

      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>

    <p>
      Values: {{ profileForm.value | json }}
    </p>

    <p>
      Form Status: {{ profileForm.status }}
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
  /*profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });*/
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }

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
