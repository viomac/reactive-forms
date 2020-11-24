import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  template: `
    <p>
      profile-editor works!
    </p>
  `,
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  constructor() { }
}
