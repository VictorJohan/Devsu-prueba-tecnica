import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPokemonComponent } from './buscar-pokemon.component';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';

describe('BuscarPokemonComponent', () => {
  let component: BuscarPokemonComponent;
  let fixture: ComponentFixture<BuscarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ BuscarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(BuscarPokemonComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should emit the pokemon', () => {
    const pokemon:Pokemon = {
      id: 1, name: 'bulbasaur', type: 'grass', hp: 45, attack: 49, defense: 49,
      image: '',
      id_author: 1,
      idAuthor: 1
    };
    component.throwPokemon.subscribe(p => {
      expect(p).toEqual(pokemon);
    });
  });
});
