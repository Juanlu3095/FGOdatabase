import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaServantsComponent } from './lista-servants/lista-servants.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatoservantComponent } from './datoservant/datoservant.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListaServantsBytagComponent } from './lista-servants-bytag/lista-servants-bytag.component';
import { ListaServantsByclassComponent } from './lista-servants-byclass/lista-servants-byclass.component';
import { ListaServantsByrarityComponent } from './lista-servants-byrarity/lista-servants-byrarity.component';
import { FormsModule } from '@angular/forms';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TerminosComponent } from './terminos/terminos.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes=[
  {path:'', component: ListaServantsComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'dato/:id', component: DatoservantComponent},
  {path:'rareza/:rareza', component: ListaServantsByrarityComponent},
  {path:'clase/:clase', component: ListaServantsByclassComponent},
  {path:'etiquetas/:etiquetas', component: ListaServantsBytagComponent},
  {path:'acerca-de', component: AboutComponent},
  {path:'terminos-y-condiciones', component: TerminosComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListaServantsComponent,
    ContactoComponent,
    DatoservantComponent,
    ListaServantsBytagComponent,
    ListaServantsByclassComponent,
    ListaServantsByrarityComponent,
    TerminosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    //InfiniteScrollModule
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
