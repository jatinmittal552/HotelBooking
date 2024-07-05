import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const fulllist = [];
    for(const list of value){
      if(list['_location']===filterString){
        fulllist.push(list);
      }
    }
    return fulllist;
  }

}
