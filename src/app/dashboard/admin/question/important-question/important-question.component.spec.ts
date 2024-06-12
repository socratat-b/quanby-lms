import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantQuestionComponent } from './important-question.component';

describe('ImportantQuestionComponent', () => {
  let component: ImportantQuestionComponent;
  let fixture: ComponentFixture<ImportantQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportantQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
