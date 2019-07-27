import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'propertyView' })
export class PropertyViewPipe implements PipeTransform {
  transform(value: any, propName: string): string {
    let result = String.Empty;

    if (value && value[propName]) {
      result = value[propName];
    }

    return result;
  }
}
