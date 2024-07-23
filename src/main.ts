import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { NgbPaginationTestComponent } from './ngbpagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgbPaginationTestComponent],
  template: 
  `
   Test for let:
  <app-ngb-test/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
