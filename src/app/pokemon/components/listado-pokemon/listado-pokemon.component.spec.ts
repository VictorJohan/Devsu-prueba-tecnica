import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from '../../models/pokemon.model';

import { ListadoPokemonComponent } from './listado-pokemon.component';
import { first } from 'rxjs';

describe('ListadoPokemonComponent', () => {
  let component: ListadoPokemonComponent;
  let fixture: ComponentFixture<ListadoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit pokemonSeleccionado event', () => {
    const pokemon:Pokemon = {
      id: 1, name: 'bulbasaur', type: 'grass', hp: 45, attack: 49, defense: 49,
      image: '',
      id_author: 1,
      idAuthor: 1
    };

    component.pokemonSeleccionado.subscribe(p => {
      expect(p).toEqual(pokemon);
    });

    //component.editarPokemon(pokemon);
  });

  it('should emit pokemonEliminado event', () => {
    const pokemon:Pokemon = {
      id: 1, name: 'bulbasaur', type: 'grass', hp: 45, attack: 49, defense: 49,
      image: '',
      id_author: 1,
      idAuthor: 1
    };

    component.pokemonEliminado.pipe(first()).subscribe(p => {
      expect(p).toEqual(pokemon);
    });
    
    //component.eliminarPokemon(pokemon);
  });
});
