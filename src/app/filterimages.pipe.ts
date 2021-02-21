import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {

  transform(items: any[], bike: string): any {

    if (bike === 'all') {
      return items;
    } else {
      return items.filter(item => {
        return item.brand === bike
      })
    }
  }

}
