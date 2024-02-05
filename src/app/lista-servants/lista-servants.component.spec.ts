import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServantsComponent } from './lista-servants.component';

describe('ListaServantsComponent', () => {
  let component: ListaServantsComponent;
  let fixture: ComponentFixture<ListaServantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaServantsComponent]
    });
    fixture = TestBed.createComponent(ListaServantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
