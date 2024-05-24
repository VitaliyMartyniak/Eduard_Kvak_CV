import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityProjectComponent } from './clarity-project.component';

describe('ClarityProjectComponent', () => {
  let component: ClarityProjectComponent;
  let fixture: ComponentFixture<ClarityProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarityProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClarityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
