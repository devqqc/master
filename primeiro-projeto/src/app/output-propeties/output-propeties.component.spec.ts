import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropetiesComponent } from './output-propeties.component';

describe('OutputPropetiesComponent', () => {
  let component: OutputPropetiesComponent;
  let fixture: ComponentFixture<OutputPropetiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropetiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
