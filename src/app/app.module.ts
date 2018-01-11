import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

import { ContactsService } from './services/contacts.service';

const appRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsListComponent },
  { path: 'messages', component: MessagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    LayoutComponent,
    NavBarComponent,
    MessagesComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes
    )
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
