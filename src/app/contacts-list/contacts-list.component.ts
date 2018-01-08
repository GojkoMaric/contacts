import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list', //selector se uzima i stavlja u app.component pod tag <app-...>
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contact = 'First Contact';
  
  constructor() { }

  ngOnInit() {
  }

}
