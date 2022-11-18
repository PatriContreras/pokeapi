import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  types: any[] = []

  public pokemonForm = new FormGroup({
    name: new FormControl(''),
    weight: new FormControl(''),
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

  onSubmit() {
    this._pokemonService.setData(this.pokemonForm.value)
  }

  onChange($event: any) {
    console.log($event)
    this._pokemonService.setType($event.target.value)
  }
}
