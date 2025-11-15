import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorDetailComponent } from './emprendedor-detail.component';

describe('EmprendedorDetailComponent', () => {
  let component: EmprendedorDetailComponent;
  let fixture: ComponentFixture<EmprendedorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmprendedorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprendedorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
