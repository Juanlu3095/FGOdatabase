import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServantService } from "../servant.service";
import { Servant } from "../servant";

@Component({
  selector: 'app-datoservant',
  templateUrl: './datoservant.component.html',
  styleUrls: ['./datoservant.component.css']
})
export class DatoservantComponent {

  constructor(private router:Router, private route:ActivatedRoute, private servantService: ServantService) {}

  public servant: Servant[] = [];

  // Índice o id de la url
  indice:number=0;

  ngOnInit(): void {
    //Con esto obtenemos la id de la url del archivo
    this.indice=this.route.snapshot.params['id'];
    console.log(this.indice);
    this.obtenerServantId();
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  obtenerServantId() {
    this.servantService.getServantsById(this.indice).subscribe(response => this.servant = response)
    this.servantService.getServantsById(this.indice).subscribe(response => console.log(response))
  }

  
  
}
