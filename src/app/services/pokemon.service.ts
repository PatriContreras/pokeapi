import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  typeUrl = environment.typeUrl;
  pokemonUrl = environment.pokemonUrl

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.pokemonUrl)
  }

  getPokemonById(identifier: string | number) {
    return this.httpClient.get(`${this.pokemonUrl}/${identifier}`)
  }
  getTypes() {
    return this.httpClient.get(this.typeUrl)
  }

  getPokemonByType(type: string) {
    return this.httpClient.get(`${this.typeUrl}/${type}`)
  }


}
