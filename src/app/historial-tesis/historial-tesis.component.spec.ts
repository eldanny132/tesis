import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTesisComponent } from './historial-tesis.component';

describe('HistorialTesisComponent', () => {
  let component: HistorialTesisComponent;
  let fixture: ComponentFixture<HistorialTesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialTesisComponent]
    });
    fixture = TestBed.createComponent(HistorialTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
