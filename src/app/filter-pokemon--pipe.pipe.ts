import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPokemonPipe', pure: false})

export class FilterPokemonPipePipe implements PipeTransform {

  //entrée est un tableau, l'argument de la recherche est une propriété string
  //searchString est la valeur à chercher
  transform(value: any[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
