import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../services/poke-apiservice.service';
import { PokeShareInfoService } from '../services/poke-share-info.service';
import { PokeDetail, Pokemon } from '../shared/pokemon';

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
  pokeDetail: PokeDetail;

  constructor(private pokemonService: PokeAPIServiceService,
              private pokeShareInfoService: PokeShareInfoService ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon('' + index, e.name, e.url));
      });
    });
  }

  go(){

    if(this.selectedPokemonId !== ''){
      this.pokemonService.getPokemonInfo(this.selectedPokemonId)
      .subscribe( (data) => {
      this.pokeDetail = data;
      this.pokeShareInfoService.setValue(this.selectedPokemonId)
      });
    }
  }

}
