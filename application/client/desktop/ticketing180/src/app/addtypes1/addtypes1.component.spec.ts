import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtypes1Component } from './addtypes1.component';

describe('Addtypes1Component', () => {
  let component: Addtypes1Component;
  let fixture: ComponentFixture<Addtypes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtypes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtypes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});