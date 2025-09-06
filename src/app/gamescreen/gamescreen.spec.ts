import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamescreen } from './gamescreen';

describe('Gamescreen', () => {
  let component: Gamescreen;
  let fixture: ComponentFixture<Gamescreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamescreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gamescreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
