import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildFormsComponent } from './guild-forms.component';

describe('GuildFormsComponent', () => {
  let component: GuildFormsComponent;
  let fixture: ComponentFixture<GuildFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuildFormsComponent]
    });
    fixture = TestBed.createComponent(GuildFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
