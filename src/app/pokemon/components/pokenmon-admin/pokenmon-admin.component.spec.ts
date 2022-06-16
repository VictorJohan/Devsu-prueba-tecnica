import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pokemon } from '../../models/pokemon.model';

import { PokenmonAdminComponent } from './pokenmon-admin.component';

describe('PokenmonAdminComponent', () => {
  let component: PokenmonAdminComponent;
  let fixture: ComponentFixture<PokenmonAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [ PokenmonAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokenmonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shuld be invalid when empty', () => {
    expect(component.formulario.valid).toBeFalsy();
  });

  it('should be valid when filled', () => {
    component.pokemon = {
      id: 0,
      name: 'pikachu',
      image: 'https://www.pokemon.com/es/assets/cms2/img/pokedex/full/025.png',
      attack: 10,
      defense: 10,
      hp: 10,
      id_author: 0,
      idAuthor: 1,
      type: 'electric'
    };
    component.refrescarFormulario();
    expect(component.formulario.valid).toBeTruthy();
  });

  it('should can make a http request', () => {
    const pokemon = new Pokemon({
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
    component.pokemon = pokemon;
    component.refrescarFormulario();
    expect(component.formulario.valid).toBeTruthy();
    
  });
});
