import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snake2Component } from './snake2.component';

describe('Snake2Component', () => {
  let component: Snake2Component;
  let fixture: ComponentFixture<Snake2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snake2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
