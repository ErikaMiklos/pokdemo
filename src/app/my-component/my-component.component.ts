import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../shared/pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: any = document.getElementById("inputId");
  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
