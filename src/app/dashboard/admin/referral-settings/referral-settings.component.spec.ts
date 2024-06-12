import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSettingsComponent } from './referral-settings.component';

describe('ReferralSettingsComponent', () => {
  let component: ReferralSettingsComponent;
  let fixture: ComponentFixture<ReferralSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
