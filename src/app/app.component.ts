import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row justify-content-center">
      <div class="col-md-5 col-sm-5">
      <app-profile-editor></app-profile-editor>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
}
