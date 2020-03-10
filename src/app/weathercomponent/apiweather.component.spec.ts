import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWeatherComponent } from './apiweather.component';

describe('TemplatesComponent', () => {
  let component: ApiWeatherComponent;
  let fixture: ComponentFixture<ApiWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
