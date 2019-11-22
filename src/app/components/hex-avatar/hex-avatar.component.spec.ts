import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexAvatarComponent } from './hex-avatar.component';

describe('HexAvatarComponent', () => {
  let component: HexAvatarComponent;
  let fixture: ComponentFixture<HexAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
