import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServantsByrarityComponent } from './lista-servants-byrarity.component';

describe('ListaServantsByrarityComponent', () => {
  let component: ListaServantsByrarityComponent;
  let fixture: ComponentFixture<ListaServantsByrarityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServantsByrarityComponent]
    });
    fixture = TestBed.createComponent(ListaServantsByrarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
