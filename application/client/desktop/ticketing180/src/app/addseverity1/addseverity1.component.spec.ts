import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addseverity1Component } from './addseverity1.component';

describe('Addseverity1Component', () => {
  let component: Addseverity1Component;
  let fixture: ComponentFixture<Addseverity1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addseverity1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addseverity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});