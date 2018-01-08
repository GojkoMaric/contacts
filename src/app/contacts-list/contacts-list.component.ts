import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list', //selector se uzima i stavlja u app.component pod tag <app-...>
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts;

  constructor() { 
    this.contacts=
    [
      {
        firstName: 'John',
        lastName:  'Doe',
        email:     'john@example.com'
      },
      {
        firstName: 'Daniel',
        lastName:  'Ros',
        email:     'daniel@example.com'
      },
      {
        firstName: 'Martin',
        lastName:  'Hess',
        email:     'martin@example.com'
      },
      {
        firstName: 'Martin',
        lastName:  'Hessic',
        email:     'martin@example.com'
      }

    ];
  }

  ngOnInit() {
  }

}
