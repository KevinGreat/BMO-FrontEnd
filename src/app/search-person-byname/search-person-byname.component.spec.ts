import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersonBYNameComponent } from './search-person-byname.component';

describe('SearchPersonBYNameComponent', () => {
  let component: SearchPersonBYNameComponent;
  let fixture: ComponentFixture<SearchPersonBYNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPersonBYNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPersonBYNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
