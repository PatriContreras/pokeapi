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
  $pokemonList: BehaviorSubject<any> = new BehaviorSubject({});
  $pokemonType: BehaviorSubject<any> = new BehaviorSubject({});

  allPokemon: any;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.pokemonUrl)
  }

  getPokemonById(url: string) {
    return this.httpClient.get(url)
  }
  getPokemonByName(name: string) {
    console.log('name', `${this.pokemonUrl}/${name}`)
    return this.httpClient.get(`${this.pokemonUrl}/${name}`)
  }
  getTypes() {
    return this.httpClient.get(this.typeUrl)
  }

  getPokemonByType(type: string) {
    return this.httpClient.get(`${this.typeUrl}/${type}`)
  }

  setAllPokemons(list: any): void {
    this.allPokemon = list
    this.$pokemonList.next(this.allPokemon);
  }

  getAllPokemon() {
    return this.allPokemon;
  }

  setData(newPokemon: any) {
    console.log(newPokemon)
    this.allPokemon.unshift(newPokemon)
    this.setAllPokemons(this.allPokemon)
  }
  setType(type: string): void {
    this.$pokemonType.next(type);
  }

}
