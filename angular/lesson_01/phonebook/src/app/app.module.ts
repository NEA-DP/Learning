import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SearchComponent } from './search/search.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GoBackComponent } from './go-back/go-back.component';
import { PhonePipe } from './phone.pipe';
import { ErrorDirective } from './error.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PersonDetailComponent,
    PagenotfoundComponent,
    AboutComponent,
    SearchComponent,
    PersonAddComponent,
    GroupsComponent,
    GroupAddComponent,
    GroupDetailComponent,
    GoBackComponent,
    PhonePipe,
    ErrorDirective
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientInMemoryWebApiModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
