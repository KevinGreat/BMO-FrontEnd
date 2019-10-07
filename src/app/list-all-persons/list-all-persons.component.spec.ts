import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPersonsComponent } from './list-all-persons.component';

describe('ListAllPersonsComponent', () => {
  let component: ListAllPersonsComponent;
  let fixture: ComponentFixture<ListAllPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
