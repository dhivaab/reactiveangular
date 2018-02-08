import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namespaces'
})
export class NamespacesPipe implements PipeTransform {

  transform(value: string, character: string): any {
    return value.replace('', character);
  }
}
