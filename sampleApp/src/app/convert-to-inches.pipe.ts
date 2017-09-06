import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToInches'
})
export class ConvertToInchesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
