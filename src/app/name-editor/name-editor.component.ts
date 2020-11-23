import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  template: `
    <label>
      Name:
      <input type="text" [formControl]="name">
    </label>
    <p>
      Value: {{ name.value }}
    </p>
    <p>
      <button (click)="updateName()">Update Name</button>
    </p>
  `,
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');

  constructor() { }

  updateName(): void {
    this.name.setValue('Nancy');
  }

}
