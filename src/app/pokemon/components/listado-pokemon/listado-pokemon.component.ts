import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent implements OnInit {

  @Input() pokemons: Pokemon[] =[];
  @Output() pokemonSeleccionado = new EventEmitter<Pokemon>();
  @Output() pokemonEliminado = new EventEmitter<Pokemon>();
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

  editarPokemon(pokemon: Pokemon) {
    this.pokemonSeleccionado.emit(pokemon);
    Utils.goToAdmPokemon();
  }
  
  eliminarPokemon(pokemon: Pokemon) {
   if(confirm('¿Está seguro de eliminar el pokemon?')) {
    this.pokemonService.delete(pokemon.id).subscribe(resp => {
      console.log(resp);
      this.pokemonEliminado.emit(pokemon);
      
    })
   }
  }

}
