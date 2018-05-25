import { Component, ViewChild, Injector } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserData } from './interfaces/userdata';
import { AppComponentBase } from './app.component.base';
import { AppComponentService } from './services/app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppComponentBase {
    title = 'WELCOME TO MY ANGULAR5 PORTFOLIO';
    displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;
    appComponentService: AppComponentService;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(injector: Injector) {
        super();
        this.appComponentService = injector.get(AppComponentService);  
    }

    ngOnInit() {
        let users: UserData[] = [];

        // Retrieve users from JSON file
        this.appComponentService.customGet('../assets/userdata.json').subscribe(
            jsonResponse => {
                users = jsonResponse;

                // Assign the data to the data source for the table to render
                this.dataSource = new MatTableDataSource(users);

                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error => {
                console.error('An error has occurred while retreiving the user data ', error);
            });      
    }

    /** Filter Textbox functionality */
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
