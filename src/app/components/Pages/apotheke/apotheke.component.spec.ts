import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApothekeComponent } from './apotheke.component';

describe('ApothekeComponent', () => {
  let component: ApothekeComponent;
  let fixture: ComponentFixture<ApothekeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApothekeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApothekeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
