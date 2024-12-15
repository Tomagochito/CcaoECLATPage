import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaDeValorComponent } from './propuesta-de-valor.component';

describe('PropuestaDeValorComponent', () => {
  let component: PropuestaDeValorComponent;
  let fixture: ComponentFixture<PropuestaDeValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestaDeValorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaDeValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
