import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarRegistrosComponent } from './generar-registros.component';

describe('GenerarRegistrosComponent', () => {
  let component: GenerarRegistrosComponent;
  let fixture: ComponentFixture<GenerarRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarRegistrosComponent]
    });
    fixture = TestBed.createComponent(GenerarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
