import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsComponentComponent } from './emails-component.component';

describe('EmailsComponentComponent', () => {
  let component: EmailsComponentComponent;
  let fixture: ComponentFixture<EmailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
