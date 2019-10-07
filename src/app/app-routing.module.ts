import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAllPersonsComponent} from './list-all-persons/list-all-persons.component';
import {SearchPersonByNameComponent} from './search-person-byname/search-person-byname.component';

const routes: Routes = [
  {path: 'listAll', component: ListAllPersonsComponent},
  {path: 'searchPerson', component: SearchPersonByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
