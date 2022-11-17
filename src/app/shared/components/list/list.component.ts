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
      // console.log(res)
      res.results.forEach((element: any) => {
        this._pokemonService.getPokemonById(element.url)
          .pipe(map((el: any) => {
            return {
              name: el.name,
              weight: el.weight,
              type: [...el.types.map((type: any) => { return type.type.name })]
            }
          }))
          .subscribe((data: any) => {
            this.data.push(data)
            this.allData = JSON.parse(JSON.stringify(this.data))
            this._pokemonService.setAllPokemons(this.data)
          })
      })

    })


  }
}
