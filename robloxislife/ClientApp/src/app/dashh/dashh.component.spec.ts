import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashhComponent } from './dashh.component';

describe('DashhComponent', () => {
  let component: DashhComponent;
  let fixture: ComponentFixture<DashhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
