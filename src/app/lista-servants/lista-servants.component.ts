import { Component, OnInit } from '@angular/core';
import { ServantService } from "../servant.service";
import { Servant } from "../servant"; /*Importa clase Servant*/
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-servants',
  templateUrl: './lista-servants.component.html',
  styleUrls: ['./lista-servants.component.css']
})
export class ListaServantsComponent implements OnInit{

  public servant: Servant[] = []; // Es de clase Servant, coge los datos de servant.ts

  busqueda:string = "";

  constructor(private servantService: ServantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerServant();
    
  }

  /*Función para realizar la búsqueda cuando se presione la tecla ENTER*/
  buscar(busqueda:string) {
    this.router.navigate(['/etiquetas', busqueda]);
  }

  obtenerServant() {
    this.servantService.getServants().subscribe(response => this.servant = response)
    this.servantService.getServants().subscribe(response => console.log(response))
  }

  //Evento que se dispara al hacer scroll hacia abajo, se usaba para Infinite Scroll
  /*onScrollDown():void{
    console.log("hola que tal");
  }
  */
  
}
