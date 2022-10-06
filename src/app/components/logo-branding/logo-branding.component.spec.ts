import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBrandingComponent } from './logo-branding.component';

describe('LogoBrandingComponent', () => {
  let component: LogoBrandingComponent;
  let fixture: ComponentFixture<LogoBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBrandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
