import { Component, OnInit } from '@angular/core';
import { ServantService } from "../servant.service";
import { Servant } from "../servant"; /*Importa clase Servant*/
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-servants-bytag',
  templateUrl: './lista-servants-bytag.component.html',
  styleUrls: ['./lista-servants-bytag.component.css']
})
export class ListaServantsBytagComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private servantService: ServantService) {}

  public servant: Servant[] = [];

  // Índice o id de la url
  indice:string="";

  ngOnInit(): void {
    //Con esto obtenemos la id de la url del archivo
    this.indice=this.route.snapshot.params['etiquetas'];
    console.log(this.indice);
    this.obtenerServantTag();
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  obtenerServantTag() {
    this.servantService.getServantsByTag(this.indice).subscribe(response => this.servant = response)
    this.servantService.getServantsByTag(this.indice).subscribe(response => console.log(response))
  }
}
