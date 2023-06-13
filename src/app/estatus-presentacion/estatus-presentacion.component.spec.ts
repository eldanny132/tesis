import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusPresentacionComponent } from './estatus-presentacion.component';

describe('EstatusPresentacionComponent', () => {
  let component: EstatusPresentacionComponent;
  let fixture: ComponentFixture<EstatusPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstatusPresentacionComponent]
    });
    fixture = TestBed.createComponent(EstatusPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
