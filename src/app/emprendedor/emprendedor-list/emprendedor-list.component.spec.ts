import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorListComponent } from './emprendedor-list.component';

describe('EmprendedorListComponent', () => {
  let component: EmprendedorListComponent;
  let fixture: ComponentFixture<EmprendedorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmprendedorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprendedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
