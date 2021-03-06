import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveHexagonComponent } from './hexagon.component';

describe('HiveHexagonComponent', () => {
  let component: HiveHexagonComponent;
  let fixture: ComponentFixture<HiveHexagonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiveHexagonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveHexagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
