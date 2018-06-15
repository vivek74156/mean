import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter
  // @Output() onFilter: EventEmitter = new EventEmitter();

  constructor(
  ) { }

  totalItems = 100;
  currentPage = 5;
  cols = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Enroll' }, { name: 'Age' }, { name: 'Branch' }];
  data = [];
  filteredData = [];
  pageSize: 10;
  rows = [
    { name: 'vivek', gender: 'Male', Enroll: '123', age: '40', Branch: 'Software' },
    { name: 'Dany', gender: 'Male', Enroll: 'KFC', age: '35', Branch: 'Teacher' },
    { name: 'Molly', gender: 'Female', Enroll: 'Burger King', age: '25', Branch: 'Doc.' },
    { name: 'Nitesh', gender: 'Male', Enroll: 'smartdata', age: '26', Branch: 'Laywer' },
    { name: 'Kapil', gender: 'Male', Enroll: 'smartdata', age: '30', Branch: 'Student' },
    { name: 'Suresh', gender: 'Male', Enroll: 'Accenture', age: '10', Branch: 'N/A' },
    { name: 'Raaj', gender: 'Male', Enroll: 'TCS', age: '70', Branch: 'Actor' },
    { name: 'Shahrukh', gender: 'Male', Enroll: 'CTS', age: '40', Branch: 'Actor' },
    { name: 'Salman', gender: 'Male', Enroll: 'c++', age: '39', Branch: 'Business' },
    { name: 'Kat', gender: 'female', Enroll: 'smartdata', age: '23', Branch: 'Nurse' },
    { name: 'Aarav', gender: 'Male', Enroll: 'Swimlane', age: '13', Branch: 'Software' },
  ];
  // columns = [
  //   { prop: 'name' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];
  ngOnInit() {
    // populate datatable rows
    this.data = this.rows;
    // copy over dataset to empty object
    this.filteredData = this.rows;
  }

  something() {
    alert('its working')
  }

  onSort(event) {
    console.log('Sort Event', event);
    const rows = [...this.rows];

    const sort = event.sorts[0];
    rows.sort((a, b) => {
      return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    });

    this.rows = rows;
  }
  editUser() {
    alert('You Just edited the user !!')
  }

  deleteUser() {
    alert('You have deleted one user !!')
  }


  takeAction(value) {
    console.log(value, typeof value);
    if (value == '1') {
      console.log("Case 1")
    } else if (value == '2') {
      console.log("Case 1")
    } else {
      (value == '3')
      console.log("Case 1")
    }
  }

  filterDatatable(event) {
    let val = event.target.value.toLowerCase();
    let colsAmt = this.cols.length;
    let keys = Object.keys(this.rows[0]);
    this.data = this.filteredData.filter(function (item) {
      for (let i = 0; i < colsAmt; i++) {
        if (item[keys[i]].toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
    });

  }


}
