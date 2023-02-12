import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerPanelComponent } from './tracker-panel.component';

describe('TrackerPanelComponent', () => {
  let component: TrackerPanelComponent;
  let fixture: ComponentFixture<TrackerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
