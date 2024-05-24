import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelasProjectComponent } from './intelas-project.component';

describe('IntelasProjectComponent', () => {
  let component: IntelasProjectComponent;
  let fixture: ComponentFixture<IntelasProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelasProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntelasProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
