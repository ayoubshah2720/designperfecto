import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoStyleComponent } from './logo-style.component';

describe('LogoStyleComponent', () => {
  let component: LogoStyleComponent;
  let fixture: ComponentFixture<LogoStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
