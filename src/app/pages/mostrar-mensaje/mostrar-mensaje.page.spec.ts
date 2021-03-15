import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarMensajePage } from './mostrar-mensaje.page';

describe('MostrarMensajePage', () => {
  let component: MostrarMensajePage;
  let fixture: ComponentFixture<MostrarMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
