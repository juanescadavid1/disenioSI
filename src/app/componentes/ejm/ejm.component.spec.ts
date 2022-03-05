import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmComponent } from './ejm.component';

describe('EjmComponent', () => {
  let component: EjmComponent;
  let fixture: ComponentFixture<EjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
