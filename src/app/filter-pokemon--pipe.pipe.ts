import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPokemonPipe'})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

  /*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 * transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
*/

}
