import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomSettingComponent } from './zoom-setting.component';

describe('ZoomSettingComponent', () => {
  let component: ZoomSettingComponent;
  let fixture: ComponentFixture<ZoomSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
