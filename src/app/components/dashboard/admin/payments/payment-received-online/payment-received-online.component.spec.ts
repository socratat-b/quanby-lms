import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceivedOnlineComponent } from './payment-received-online.component';

describe('PaymentReceivedOnlineComponent', () => {
  let component: PaymentReceivedOnlineComponent;
  let fixture: ComponentFixture<PaymentReceivedOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentReceivedOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentReceivedOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
