import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servant } from "./servant"; /*Importa clase Servant*/
import { environment } from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ServantService {
  baseurl = environment.baseUrl;

  constructor(public http: HttpClient) { }

  //Hay que poner la clase de los datos que se reciben para que luego los pueda pintar
  getServants() {
    return this.http.get<Servant[]>(`${this.baseurl}/getAll.php`);
  }

  getServantsById(id: number) {
    return this.http.get<Servant[]>(`${this.baseurl}/getbyid.php?id=${id}`);
  }

  getServantsByRarity(rareza: number) {
    return this.http.get<Servant[]>(`${this.baseurl}/getbyrarity.php?rareza=${rareza}`);
  }

  getServantsByClass(clase: string) {
    return this.http.get<Servant[]>(`${this.baseurl}/getbyclass.php?clase=${clase}`);
  }

  getServantsByTag(etiquetas: string | number) {
    return this.http.get<Servant[]>(`${this.baseurl}/getbytag.php?etiquetas=${etiquetas}`);
  }
  
}
