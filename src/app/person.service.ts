import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  /*
  private personsUrl = 'http://localhost:8080/persons';
  private personsByFirstNameUrl = 'http://localhost:8080/persons/';
  private personsByLastNameUrl = 'http://localhost:8080/persons/?lastName=';
  */

  private personsUrl = 'http://ec2-3-15-226-35.us-east-2.compute.amazonaws.com:8888/persons';
  private personsByFirstNameUrl = 'http://ec2-3-15-226-35.us-east-2.compute.amazonaws.com:8888/persons/';
  private personsByLastNameUrl = 'http://ec2-3-15-226-35.us-east-2.compute.amazonaws.com:8888/persons/?lastName=';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(catchError(this.handleError<Person[]>('getPersons', []))
    );
  }

  getPersonsByFirstName(firstName: string): Observable<Person[]> {
     return this.http.get<Person[]>(this.personsByFirstNameUrl +  firstName )
      .pipe(catchError(this.handleError<Person[]>('getPersons', []))
      );
  }

  getPersonsByLastName(lastName: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsByLastNameUrl + lastName)
      .pipe(catchError(this.handleError<Person[]>('getPersons', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // do sth when error happened. Here just log to console instead
      return of(result as T);
    };
  }

}
