import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndServicesComponent } from './skills-and-services.component';

describe('SkillsAndServicesComponent', () => {
  let component: SkillsAndServicesComponent;
  let fixture: ComponentFixture<SkillsAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAndServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
