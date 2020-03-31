import { Pipe, PipeTransform } from '@angular/core';
import { ArtistInfo } from './common';

@Pipe({
  name: 'artistFilter',
  pure: false
})
export class ArtistFilterPipe implements PipeTransform {

  transform(array: ArtistInfo[], selected: Set<string>): any {
    if (!selected || !selected.size) {
      return [];
    } else {
      return array.filter(entry => selected.has(entry.id));
    }
  }

}
