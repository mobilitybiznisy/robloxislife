import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildPagesComponent } from './guild-pages.component';

describe('GuildPagesComponent', () => {
  let component: GuildPagesComponent;
  let fixture: ComponentFixture<GuildPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuildPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
