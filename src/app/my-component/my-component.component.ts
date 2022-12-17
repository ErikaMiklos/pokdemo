import { Component, OnInit } from '@angular/core';
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

  constructor() { 
    this.pokemons.push(new Pokemon('1', 'pikachu'));
    this.pokemons.push(new Pokemon('2', 'bulbasaur'));
    this.pokemons.push(new Pokemon('3', 'ivysaur'));
    this.pokemons.push(new Pokemon('4', 'venusaur'));
    this.pokemons.push(new Pokemon('5', 'charmander'));
  }

  ngOnInit(): void {
  }

}
