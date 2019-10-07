import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-search-person-byname',
  templateUrl: './search-person-byname.component.html',
  styleUrls: ['./search-person-byname.component.scss']
})
export class SearchPersonByNameComponent implements OnInit {


  personsByName: Person[];



  constructor(private personService: PersonService) { }

  ngOnInit() {
  }



  getPersonsByFirstName(firstName: string): void {
    console.log( firstName );
    this.personService.getPersonsByFirstName(firstName)
      .subscribe(persons => this.personsByName = persons);
  }

  getPersonsByLastName(lastName: string): void {
    console.log( lastName );
    this.personService.getPersonsByLastName(lastName)
      .subscribe(persons => this.personsByName = persons);
  }
}
