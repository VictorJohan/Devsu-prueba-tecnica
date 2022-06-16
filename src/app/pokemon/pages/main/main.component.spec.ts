import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should can catch a pokemon', () => {
    component.catchPokemon({
      id: 0,
      name: 'pikachu',
      image: 'https://www.pokemon.com/es/assets/cms2/img/pokedex/full/025.png',
      attack: 10,
      defense: 10,
      hp: 10,
      id_author: 0,
      idAuthor: 1,
      type: 'electric'
    });
    expect(component.pokemon).toBeDefined();
  });

  it('should can cargar pokemons', () => {
    component.cargarPokemons();
    expect(component.pokemons).toBeDefined();
  });

  it('should can mostrar pokemon', () => {
    component.mostrarPokemon({
      id: 0,
      name: 'pikachu',
      image: 'https://www.pokemon.com/es/assets/cms2/img/pokedex/full/025.png',
      attack: 10,
      defense: 10,
      hp: 10,
      id_author: 0,
      idAuthor: 1,
      type: 'electric'
    });
    expect(component.pokemons).toBeDefined();
  });

 
});
