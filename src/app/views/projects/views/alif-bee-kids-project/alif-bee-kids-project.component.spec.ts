import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlifBeeKidsProjectComponent } from './alif-bee-kids-project.component';

describe('AlifBeeKidsProjectComponent', () => {
  let component: AlifBeeKidsProjectComponent;
  let fixture: ComponentFixture<AlifBeeKidsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlifBeeKidsProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlifBeeKidsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
