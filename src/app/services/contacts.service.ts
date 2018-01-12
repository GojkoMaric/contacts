import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {

  constructor(private _httpClient: HttpClient) {

  }

  public getContacts()
  {
    return this._httpClient.get<any[]>('http://localhost:8000/contacts.php');    
    
    // console.log(this._httpClient.get('http://localhost:8000/contacts.php'));

    // return [
    //   {
    //     firstName: 'John',
    //     lastName:  'Doe',
    //     email:     'john@example.com'
    //   },
    //   {
    //     firstName: 'Daniel',
    //     lastName:  'Ros',
    //     email:     'daniel@example.com'
    //   },
    //   {
    //     firstName: 'Martin',
    //     lastName:  'Hess',
    //     email:     'martin@example.com'
    //   },
    //   {
    //     firstName: 'Martin',
    //     lastName:  'Hessic',
    //     email:     'martin@example.com'
    //   }
    // ];
  }

  getMessage()
  {
    return "Hello!";
  }
}
