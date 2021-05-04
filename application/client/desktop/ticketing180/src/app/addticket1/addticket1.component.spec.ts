import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addticket1Component } from './addticket1.component';

describe('Addticket1Component', () => {
  let component: Addticket1Component;
  let fixture: ComponentFixture<Addticket1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addticket1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addticket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});