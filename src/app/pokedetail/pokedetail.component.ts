import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../services/poke-share-info.service';
import { PokeDetail } from '../shared/pokemon';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareInfoService:PokeShareInfoService) { }

  ngOnInit(): void {
    console.log(this.pokeShareInfoService.getValue());
  }

}
