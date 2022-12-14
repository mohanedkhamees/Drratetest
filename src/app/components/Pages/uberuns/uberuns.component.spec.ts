import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UberunsComponent } from './uberuns.component';

describe('UberunsComponent', () => {
  let component: UberunsComponent;
  let fixture: ComponentFixture<UberunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UberunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UberunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
