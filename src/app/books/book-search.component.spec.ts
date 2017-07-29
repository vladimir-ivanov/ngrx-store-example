import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookSearchComponent} from './book-search.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookSearchComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(BookSearchComponent,
      {
        set: {
          template: '<div></div>'
        }
      }).createComponent(BookSearchComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
