import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokenmon-admin',
  templateUrl: './pokenmon-admin.component.html',
  styleUrls: ['./pokenmon-admin.component.css']
})
export class PokenmonAdminComponent implements OnChanges {

  @Input() pokemon: Pokemon = new Pokemon();
  @Output() guardado = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, public pokemonService: PokemonService) { }

  formulario: FormGroup = this.fb.group({
    id: [0],
    name: [this.pokemon.name || '', [Validators.required]],
    image: [this.pokemon.image || '', [Validators.required]],
    attack: [this.pokemon.attack || 0, [Validators.required, Validators.min(0)]],
    defense: [this.pokemon.defense || 0, [Validators.required, Validators.min(0)]],
    hp: [this.pokemon.hp || 0, [Validators.required, Validators.min(1)]],
    id_author: [this.pokemon.id_author || 0, [Validators.required, Validators.min(0)]],
    type: [this.pokemon.type || '', [Validators.required]],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'].previousValue) {
      this.refrescarFormulario();
    }
  }

  onSubmit() {

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log(this.formulario.controls);
      return;
    }
    const pokemon = new Pokemon(this.formulario.value);

    if (pokemon.id === 0) {
      this.pokemonService.create(pokemon).subscribe(resp => {
        if ((resp as Pokemon).id > 0) {
          this.guardado.emit(true);
          this.pokemon = new Pokemon();
          this.refrescarFormulario();
        }
      });
    } else {
      this.pokemonService.update(pokemon).subscribe(resp => {
        if ((resp as Pokemon).id > 0) {
          this.guardado.emit(true);
          this.pokemon = new Pokemon();
          this.refrescarFormulario();
        }
      });
    }

  }

  cancelar(){
    this.pokemon = new Pokemon();
    this.refrescarFormulario();
  }

  campoNoValido(campo: string) {
    return this.formulario.controls[campo].errors
      && this.formulario.controls[campo].touched;
  }

  refrescarFormulario() {
    this.formulario.patchValue({
      id: this.pokemon.id,
      name: this.pokemon.name,
      image: this.pokemon.image,
      attack: this.pokemon.attack,
      defense: this.pokemon.defense,
      hp: this.pokemon.hp,
      id_author: this.pokemon.id_author,
      type: this.pokemon.type,
    });
  }

}
