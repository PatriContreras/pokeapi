import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.pokemonService.getAll().subscribe(res => {
    //   console.log(res)
    // })
  }

}
