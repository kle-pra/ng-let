import { Component } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-test',
  standalone: true,
  imports: [NgbPagination],
  template: `
    <table
      class="table table-striped"
     >
      <tbody>
        @for (person of persons; track person.id) {
          @let a = 5;
          <tr>
            <td>{{ person.name }}</td>
            <td>{{ person.surname }}</td>
          </tr>
        }
      </tbody>
    </table>
    <ngb-pagination
    [collectionSize]="persons.length"
    [(page)]="page"
    [maxSize]="10"
    [pageSize]="pagesize"
    />
  `,
})
export class NgbPaginationTestComponent {
  pagesize = 5
  page = 1
  persons: { id: number; name: string; surname: string }[] = [
    { id: 1, name: 'John', surname: 'Doe' },
    { id: 2, name: 'Jane', surname: 'Smith' },
    { id: 3, name: 'Michael', surname: 'Johnson' },
    { id: 4, name: 'Emily', surname: 'Davis' },
    { id: 5, name: 'David', surname: 'Wilson' },
    { id: 6, name: 'Sarah', surname: 'Brown' },
    { id: 7, name: 'Chris', surname: 'Miller' },
    { id: 8, name: 'Anna', surname: 'Taylor' },
    { id: 9, name: 'Robert', surname: 'Anderson' },
    { id: 10, name: 'Jessica', surname: 'Thomas' },
  ];
}
