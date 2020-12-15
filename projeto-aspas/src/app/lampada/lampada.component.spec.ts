import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadaComponent } from './lampada.component';

describe('LampadaComponent', () => {
  let component: LampadaComponent;
  let fixture: ComponentFixture<LampadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LampadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
