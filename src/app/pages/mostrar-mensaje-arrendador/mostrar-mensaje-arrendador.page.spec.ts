import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarMensajeArrendadorPage } from './mostrar-mensaje-arrendador.page';

describe('MostrarMensajeArrendadorPage', () => {
  let component: MostrarMensajeArrendadorPage;
  let fixture: ComponentFixture<MostrarMensajeArrendadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMensajeArrendadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarMensajeArrendadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
