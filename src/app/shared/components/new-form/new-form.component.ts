import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  types: any[] = []

  public pokemonForm = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    type: new FormControl('')
  });

  constructor(private _pokemonService: PokemonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._pokemonService.getTypes().subscribe((res: any) => {
      res.results.map((item: any) => {
        this.types.push(item.name)
      })
    })

  }

  get name() { return this.pokemonForm.get('name'); }
  get weight() { return this.pokemonForm.get('weight'); }


  onSubmit() {
    if (this.pokemonForm.invalid) {
      return;
    }
    this._pokemonService.setData(this.pokemonForm.value)
    this.pokemonForm.reset();
  }

  onChange($event: any) {
    this._pokemonService.setType($event.target.value)
  }
}
