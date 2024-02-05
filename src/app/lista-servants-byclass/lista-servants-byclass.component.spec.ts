import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServantsByclassComponent } from './lista-servants-byclass.component';

describe('ListaServantsByclassComponent', () => {
  let component: ListaServantsByclassComponent;
  let fixture: ComponentFixture<ListaServantsByclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServantsByclassComponent]
    });
    fixture = TestBed.createComponent(ListaServantsByclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
