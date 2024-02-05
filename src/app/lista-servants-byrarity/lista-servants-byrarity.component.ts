import { Component, OnInit } from '@angular/core';
import { ServantService } from "../servant.service";
import { Servant } from "../servant"; /*Importa clase Servant*/
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-servants-byrarity',
  templateUrl: './lista-servants-byrarity.component.html',
  styleUrls: ['./lista-servants-byrarity.component.css']
})
export class ListaServantsByrarityComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private servantService: ServantService) {}

  public servant: Servant[] = [];

  // Índice o id de la url
  indice:number=0;

  ngOnInit(): void {
    //Con esto obtenemos la id de la url del archivo
    this.indice=this.route.snapshot.params['rareza'];
    console.log(this.indice);
    this.obtenerServantRarity();
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  obtenerServantRarity() {
    this.servantService.getServantsByRarity(this.indice).subscribe(response => this.servant = response)
    this.servantService.getServantsByRarity(this.indice).subscribe(response => console.log(response))
  }
}
