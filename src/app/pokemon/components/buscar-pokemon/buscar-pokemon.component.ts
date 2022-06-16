import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {

  @Output() throwPokemon = new EventEmitter<Pokemon>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  buscar(event: any) {
    if (event.keyCode == 13) {
      this.pokemonService.getById(event.target.value as number).subscribe(resp => {
        this.throwPokemon.emit(resp);
      });
    }

  }

}
