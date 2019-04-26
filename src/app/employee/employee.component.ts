import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Employee } from '../model/employee';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  employees: Employee[] = [

    {
    id: 1,
    name: 'Alin Baicu',
    phoneNumber: '0721690919'
    },

    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
  {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
  {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
    {
      id: 2,
      name: 'Toader Andreea',
      phoneNumber: '0734545678'

    },
  ];

  displayedColumns: string[] = ['name', 'phoneNumber'];


  dataSource = new MatTableDataSource(this.employees);


  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
   

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
