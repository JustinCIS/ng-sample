import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserData } from './interfaces/userdata';
import { AppComponentBase } from './app.component.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentBase {
    title = 'app';
    displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        super();
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(this.createNewUser(i));
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    /** Builds and returns a new User. */
    createNewUser(id: number): UserData {
      const name =
          this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))] + ' ' +
          this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))].charAt(0) + '.';

      return {
          id: id.toString(),
          name: name,
          progress: Math.round(Math.random() * 100).toString(),
          color: this.COLORS[Math.round(Math.random() * (this.COLORS.length - 1))]
      };
    }
}
