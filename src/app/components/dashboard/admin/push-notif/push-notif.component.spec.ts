import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotifComponent } from './push-notif.component';

describe('PushNotifComponent', () => {
  let component: PushNotifComponent;
  let fixture: ComponentFixture<PushNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushNotifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PushNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
