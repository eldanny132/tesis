import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstatusTemaComponent } from './editar-estatus-tema.component';

describe('EditarEstatusTemaComponent', () => {
  let component: EditarEstatusTemaComponent;
  let fixture: ComponentFixture<EditarEstatusTemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEstatusTemaComponent]
    });
    fixture = TestBed.createComponent(EditarEstatusTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
