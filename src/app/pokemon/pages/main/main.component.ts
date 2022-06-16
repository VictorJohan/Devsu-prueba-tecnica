import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemon: Pokemon = new Pokemon();

  constructor(private pokemonService: PokemonService) {
    this.cargarPokemons();
  }

  ngOnInit(): void {
  }


  catchPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  pokemonEliminado() {
    this.cargarPokemons();
  }

  mostrarPokemon(pokemon: Pokemon) {
    if (pokemon !== undefined && pokemon !== null) {
      this.pokemons = [];
      this.pokemons.push(pokemon);
    }
  }

  guardado(ok: boolean) {
    if (ok) {
      alert('Pokemon guardado');
      this.cargarPokemons();
    }
    this.cargarPokemons();
  }

  cargarPokemons() {
    this.pokemonService.getAll().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  nuevo(){
    this.pokemon = new Pokemon();
    Utils.goToAdmPokemon();
  }
}
