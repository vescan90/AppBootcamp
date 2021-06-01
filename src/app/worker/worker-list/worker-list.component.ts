import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Person } from '@shared/models/person.model';
import { Observable } from 'rxjs';
import { PersonService } from '../../shared/services/person.service';


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],

})
export class WorkerListComponent implements OnInit, AfterViewInit {
  length: number = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  constructor(private personsService:PersonService) { }
  people:any
  ngOnInit() {
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'phone'];

  dataSource:Person[]=[];
  ngAfterViewInit(){
    this.personsService.getPeople("10","1").subscribe(data=>{
      console.log(data);
      this.dataSource=data.results;
    })
  }


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Person[] = [
  {
    id: {
      value:"1"
    },
    name: {
      first: 'Test',
      last: ' 1',
      title: 'Ing'
    },
    gender: "masculino",
    phone: "12345678",
    cell: "87654321",
    email:"email@gmail.com",
    dob:{
      age:26,
      date:new Date(),
    }
  },
  {
    id: {
      value:"2"
    },
    name: {
      first: 'Test',
      last: ' 2',
      title: 'Lic'
    },
    gender: "fenemino",
    phone: "12345678",
    cell: "87654321",
    email:"email@gmail.com",
    dob:{
      age:26,
      date:new Date(),
    }
  },
  {
    id: {
      value:"3",
    },
    name: {
      first: 'Test',
      last: ' 2',
      title: 'Lic'
    },
    gender: "fenemino",
    phone: "12345678",
    cell: "87654321",
    email:"email@gmail.com",
    dob:{
      age:26,
      date:new Date(),
    }
  },


];
