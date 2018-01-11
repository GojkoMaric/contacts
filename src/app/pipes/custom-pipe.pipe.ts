import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(array: any[], searchTerm?: any): any {
    if(!searchTerm){
      return array;
    }
    searchTerm = searchTerm.toLowerCase();

    return array.filter(function (item) {
      return item.firstName.toLowerCase().includes(searchTerm);
    });
  }

}


//searchTerm? -> upitnik znaci da ovaj parametar nije obavezan
//nijedan any nije obavezan, sve je deo type hitinga