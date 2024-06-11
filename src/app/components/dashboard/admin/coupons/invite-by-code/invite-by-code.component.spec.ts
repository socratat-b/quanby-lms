import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteByCodeComponent } from './invite-by-code.component';

describe('InviteByCodeComponent', () => {
  let component: InviteByCodeComponent;
  let fixture: ComponentFixture<InviteByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteByCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
