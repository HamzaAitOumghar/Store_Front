import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListClientComponent } from './book-list-client.component';

describe('BookListClientComponent', () => {
  let component: BookListClientComponent;
  let fixture: ComponentFixture<BookListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
