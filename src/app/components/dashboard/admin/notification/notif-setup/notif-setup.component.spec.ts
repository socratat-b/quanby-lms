import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifSetupComponent } from './notif-setup.component';

describe('NotifSetupComponent', () => {
  let component: NotifSetupComponent;
  let fixture: ComponentFixture<NotifSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotifSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
