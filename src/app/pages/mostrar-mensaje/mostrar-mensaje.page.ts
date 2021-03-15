import { Component, OnInit } from '@angular/core';
import {ReservasService} from '../../services/reservas.service'
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  templateUrl: './mostrar-mensaje.page.html',
  styleUrls: ['./mostrar-mensaje.page.scss'],
})
export class MostrarMensajePage implements OnInit {

  public reserva;
  constructor(
    private _reserva: ReservasService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.obtenerMensaje();
  }


  obtenerMensaje()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._reserva.obtenerReserva(id).subscribe(
      res => 
      {
        this.reserva = res.reserva;
        console.log(this.reserva);
      }
    )
  }

}
