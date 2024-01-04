import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMdvtiComponent } from './about-mdvti.component';

describe('AboutMdvtiComponent', () => {
  let component: AboutMdvtiComponent;
  let fixture: ComponentFixture<AboutMdvtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMdvtiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMdvtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
