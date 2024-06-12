import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePaymentComponent } from './offline-payment.component';

describe('OfflinePaymentComponent', () => {
  let component: OfflinePaymentComponent;
  let fixture: ComponentFixture<OfflinePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfflinePaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfflinePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
