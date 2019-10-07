import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-list-all-persons',
  templateUrl: './list-all-persons.component.html',
  styleUrls: ['./list-all-persons.component.scss']
})
export class ListAllPersonsComponent implements OnInit {

  persons: Person[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

}
