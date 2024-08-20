import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponent2 } from './standalone2.component';

describe('StandaloneComponent2', () => {
  let component: StandaloneComponent2;
  let fixture: ComponentFixture<StandaloneComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneComponent2],
    }).compileComponents();

    fixture = TestBed.createComponent(StandaloneComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
