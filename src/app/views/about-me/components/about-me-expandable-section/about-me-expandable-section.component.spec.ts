import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeExpandableSectionComponent } from './about-me-expandable-section.component';

describe('AboutMeExpandableSectionComponent', () => {
  let component: AboutMeExpandableSectionComponent;
  let fixture: ComponentFixture<AboutMeExpandableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeExpandableSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeExpandableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
