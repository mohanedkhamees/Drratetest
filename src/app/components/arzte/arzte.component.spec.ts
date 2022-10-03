import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArzteComponent } from './arzte.component';

describe('ArzteComponent', () => {
  let component: ArzteComponent;
  let fixture: ComponentFixture<ArzteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArzteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArzteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
