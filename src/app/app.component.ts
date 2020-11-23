import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-name-editor></app-name-editor>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
}
