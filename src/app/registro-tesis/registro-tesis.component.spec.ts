import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTesisComponent } from './registro-tesis.component';

describe('RegistroTesisComponent', () => {
  let component: RegistroTesisComponent;
  let fixture: ComponentFixture<RegistroTesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroTesisComponent]
    });
    fixture = TestBed.createComponent(RegistroTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
