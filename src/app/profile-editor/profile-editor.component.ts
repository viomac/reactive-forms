import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

      <button type="su bmit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  constructor() { }

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }
}
