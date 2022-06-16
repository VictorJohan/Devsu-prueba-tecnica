import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { BuscarPokemonComponent } from './components/buscar-pokemon/buscar-pokemon.component';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { PokenmonAdminComponent } from './components/pokenmon-admin/pokenmon-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    BuscarPokemonComponent,
    ListadoPokemonComponent,
    PokenmonAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MainComponent
  ]
})
export class PokemonModule { }
