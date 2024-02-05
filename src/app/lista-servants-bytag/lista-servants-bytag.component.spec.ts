import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServantsBytagComponent } from './lista-servants-bytag.component';

describe('ListaServantsBytagComponent', () => {
  let component: ListaServantsBytagComponent;
  let fixture: ComponentFixture<ListaServantsBytagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServantsBytagComponent]
    });
    fixture = TestBed.createComponent(ListaServantsBytagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
