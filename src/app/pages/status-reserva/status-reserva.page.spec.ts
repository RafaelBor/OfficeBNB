import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusReservaPage } from './status-reserva.page';

describe('StatusReservaPage', () => {
  let component: StatusReservaPage;
  let fixture: ComponentFixture<StatusReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
