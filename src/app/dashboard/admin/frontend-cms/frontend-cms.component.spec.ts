import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendCmsComponent } from './frontend-cms.component';

describe('FrontendCmsComponent', () => {
  let component: FrontendCmsComponent;
  let fixture: ComponentFixture<FrontendCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendCmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontendCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
