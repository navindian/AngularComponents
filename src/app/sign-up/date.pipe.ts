import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecustom'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let date:String = value.toDateString().format('mm/dd/yyyy');
    return date;
  }

}
