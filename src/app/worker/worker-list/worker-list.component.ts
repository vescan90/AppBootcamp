import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '@shared/models/person.model';
import { PersonService } from '@shared/services/person.service';
import {MatPaginator} from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],

})
export class WorkerListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;

  length: number = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  constructor
  (
    private personsService:PersonService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
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
  onEdit(){
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}




