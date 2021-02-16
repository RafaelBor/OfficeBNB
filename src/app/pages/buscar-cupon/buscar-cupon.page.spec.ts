import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarCuponPage } from './buscar-cupon.page';

describe('BuscarCuponPage', () => {
  let component: BuscarCuponPage;
  let fixture: ComponentFixture<BuscarCuponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCuponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarCuponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
