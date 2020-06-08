import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePerfilComponent } from './detalle-perfil.component';

describe('DetallePerfilComponent', () => {
  let component: DetallePerfilComponent;
  let fixture: ComponentFixture<DetallePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
