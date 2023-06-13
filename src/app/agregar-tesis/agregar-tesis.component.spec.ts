import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTesisComponent } from './agregar-tesis.component';

describe('AgregarTesisComponent', () => {
  let component: AgregarTesisComponent;
  let fixture: ComponentFixture<AgregarTesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarTesisComponent]
    });
    fixture = TestBed.createComponent(AgregarTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


