import { Component, OnInit } from '@angular/core';
import { ServantService } from "../servant.service";
import { Servant } from "../servant"; /*Importa clase Servant*/
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-servants-byclass',
  templateUrl: './lista-servants-byclass.component.html',
  styleUrls: ['./lista-servants-byclass.component.css']
})
export class ListaServantsByclassComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private servantService: ServantService) {}

  public servant: Servant[] = [];

  // Índice o id de la url
  indice:string="";

  ngOnInit(): void {
    //Con esto obtenemos la id de la url del archivo
    this.indice=this.route.snapshot.params['clase'];
    console.log(this.indice);
    this.obtenerServantClass();
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  obtenerServantClass() {
    this.servantService.getServantsByClass(this.indice).subscribe(response => this.servant = response)
    this.servantService.getServantsByClass(this.indice).subscribe(response => console.log(response))
  }
}
