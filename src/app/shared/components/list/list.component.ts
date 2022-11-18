import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any[] = []
  allData: any[] = [];

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit(): void {

    this._pokemonService.getAll().subscribe((res: any) => {
      res.results.forEach((element: any) => {
        this._pokemonService.getPokemonById(element.url)
          .pipe(map((el: any) => {
            console.log(el)
            return {
              name: el.name,
              weight: el.weight,
              height: el.height,
              type: [...el.types.map((type: any) => { return type.type.name })],
              abilities: [...el.abilities.map((ability: any) => { return ability.ability.name })],

            }
          }))
          .subscribe((a: any) => {
            this.data.push(a)
            this.allData = [...this.data]
            this._pokemonService.setAllPokemons(this.data)

          })
      })
    })

    this.filterByType()
  }

  filterByType() {
    this._pokemonService.$pokemonList.subscribe(datos => {
      this.data = datos
    })

    this._pokemonService.$pokemonType.subscribe(type => {
      if (type === 'Selecciona un tipo') {
        this.data = this.allData;
        return
      }
      if (this.allData) {
        this.data = this.allData.filter(pokemon => {
          return pokemon.type.includes(type)
        })
      }
    })
  }

  viewDetail(name: any) {
    console.log(name)
    this._pokemonService.getPokemonByName(name).subscribe(res => {
      console.log(res)
    })
  }
}
