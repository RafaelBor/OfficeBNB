import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficeReglasPage } from './office-reglas.page';

describe('OfficeReglasPage', () => {
  let component: OfficeReglasPage;
  let fixture: ComponentFixture<OfficeReglasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeReglasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficeReglasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
