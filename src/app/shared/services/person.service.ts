import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '@shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private API = "https://api.randomuser.me/"
  constructor(private http: HttpClient) { }

  getPeople(per_page:string, page: string):Observable<any> {
    const personsUrl= this.API+'?page='+ page+'&results='+per_page+'&seed=abc';
    return this.http.get<Person>(personsUrl);
   }

}
