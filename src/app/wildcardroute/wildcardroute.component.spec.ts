import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardrouteComponent } from './wildcardroute.component';

describe('WildcardrouteComponent', () => {
  let component: WildcardrouteComponent;
  let fixture: ComponentFixture<WildcardrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildcardrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildcardrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
