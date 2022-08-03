import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicBoxComponent } from './pic-box.component';

describe('PicBoxComponent', () => {
  let component: PicBoxComponent;
  let fixture: ComponentFixture<PicBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
