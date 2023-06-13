import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPresentacionComponent } from './solicitud-presentacion.component';

describe('SolicitudPresentacionComponent', () => {
  let component: SolicitudPresentacionComponent;
  let fixture: ComponentFixture<SolicitudPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudPresentacionComponent]
    });
    fixture = TestBed.createComponent(SolicitudPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
