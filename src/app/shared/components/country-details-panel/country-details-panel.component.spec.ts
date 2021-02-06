import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsPanelComponent } from './country-details-panel.component';

describe('CountryDetailsPanelComponent', () => {
  let component: CountryDetailsPanelComponent;
  let fixture: ComponentFixture<CountryDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryDetailsPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
