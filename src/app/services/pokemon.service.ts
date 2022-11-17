import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  typeUrl = environment.typeUrl;
  pokemonUrl = environment.pokemonUrl
  private $pokemonList: BehaviorSubject<any> = new BehaviorSubject({});
  allPokemon: any;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.pokemonUrl)
  }

  getPokemonById(url: string) {
    return this.httpClient.get(url)
  }
  getTypes() {
    return this.httpClient.get(this.typeUrl)
  }

  getPokemonByType(type: string) {
    return this.httpClient.get(`${this.typeUrl}/${type}`)
  }

  setAllPokemons(list: any): void {
    this.allPokemon = list
    this.$pokemonList.next(list);
  }

  setData(newPokemon: any) {
    console.log('nnnnnnnnn', newPokemon)
    this.allPokemon.unshift(newPokemon)
    console.log('next', this.allPokemon)
  }


}
