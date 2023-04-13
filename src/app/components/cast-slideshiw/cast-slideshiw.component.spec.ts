import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSlideshiwComponent } from './cast-slideshiw.component';

describe('CastSlideshiwComponent', () => {
  let component: CastSlideshiwComponent;
  let fixture: ComponentFixture<CastSlideshiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastSlideshiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastSlideshiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
