import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionPresentacionComponent } from './peticion-presentacion.component';

describe('PeticionPresentacionComponent', () => {
  let component: PeticionPresentacionComponent;
  let fixture: ComponentFixture<PeticionPresentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeticionPresentacionComponent]
    });
    fixture = TestBed.createComponent(PeticionPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
