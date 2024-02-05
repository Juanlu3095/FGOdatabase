import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoservantComponent } from './datoservant.component';

describe('DatoservantComponent', () => {
  let component: DatoservantComponent;
  let fixture: ComponentFixture<DatoservantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatoservantComponent]
    });
    fixture = TestBed.createComponent(DatoservantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
