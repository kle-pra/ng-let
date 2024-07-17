import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DatatableTestComponent } from './datatable-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatatableTestComponent],
  template: 
  `
   Test for datatable and let:

  <app-datatable-test/>

  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
