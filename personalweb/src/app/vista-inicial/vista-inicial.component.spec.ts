import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInicialComponent } from './vista-inicial.component';

describe('VistaInicialComponent', () => {
  let component: VistaInicialComponent;
  let fixture: ComponentFixture<VistaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
