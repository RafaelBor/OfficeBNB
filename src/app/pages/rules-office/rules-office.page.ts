import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-rules-office',
  templateUrl: './rules-office.page.html',
  styleUrls: ['./rules-office.page.scss'],
})
export class RulesOfficePage implements OnInit {


  constructor(
    private _route: ActivatedRoute,
 

  ) { }

  ngOnInit() {
  //  this.obtenerOficina();
  }

/*

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);

        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }
*/
}
