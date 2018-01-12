import { Component, OnInit } from '@angular/core';
import { CustomPipePipe } from '../../pipes/custom-pipe.pipe';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list', //selector se uzima i stavlja u app.component pod tag <app-...>
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts;
  searchTerm ='';
  testModel = "test";

  constructor(private _contactsService: ContactsService) { 
    this.contacts= this._contactsService.getContacts().subscribe(contacts => {
      this.contacts=contacts;
    });
  }

  removeContact(contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  ngOnInit() {
  }

}
