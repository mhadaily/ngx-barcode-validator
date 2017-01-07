/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Material2Component } from './material2.component';

describe('Material2Component', () => {
  let component: Material2Component;
  let fixture: ComponentFixture<Material2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
