import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../services/poke-apiservice.service';
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  pokemons: Pokemon[] = [];
  selectedPokemonId: string = '';
  searchPokemonName: string = '';

  constructor(private pokemonService: PokeAPIServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

  go(){
    console.log(this.selectedPokemonId);
  }

}
