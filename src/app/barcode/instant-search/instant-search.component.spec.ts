import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantSearchComponent } from './instant-search.component';

describe('InstantSearchComponent', () => {
  let component: InstantSearchComponent;
  let fixture: ComponentFixture<InstantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstantSearchComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
