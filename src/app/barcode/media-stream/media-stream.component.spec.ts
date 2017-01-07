/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaStreamComponent } from './media-stream.component';

describe('MediaStreamComponent', () => {
  let component: MediaStreamComponent;
  let fixture: ComponentFixture<MediaStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
