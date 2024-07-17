import { Component } from '@angular/core';
import { DataTableModule } from '@pascalhonegger/ng-datatable';

@Component({
  selector: 'app-datatable-test',
  standalone: true,
  imports: [DataTableModule],
  template: `
    <table
      class="table table-striped"
      [mfData]="persons"
      #mf="mfDataTable"
      [mfRowsOnPage]="3">
      <thead>
        <tr>
          <th style="width: 50%">
            <mfDefaultSorter by="name">Name</mfDefaultSorter>
          </th>
          <th style="width: 50%">
            <mfDefaultSorter by="email">Surname</mfDefaultSorter>
          </th>
        </tr>
      </thead>
      <tbody>
        @for (person of mf.data; track person.id) {
          @let a = 1;

          <tr>
            <td>{{ person.name }}</td>
            <td>{{ person.surname }}</td>
          </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <mfBootstrapPaginator [rowsOnPageSet]="[3, 5]"></mfBootstrapPaginator>
          </td>
        </tr>
      </tfoot>
    </table>
  `,
})
export class DatatableTestComponent {
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
