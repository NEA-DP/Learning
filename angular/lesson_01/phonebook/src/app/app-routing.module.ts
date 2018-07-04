import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';




const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},

  {path: 'contacts', component: ContactsComponent},
  {path: 'add', component: PersonAddComponent},
  {path: 'contacts/:term', component: ContactsComponent},
  {path: 'detail/:id', component: PersonDetailComponent},

  {path: 'groups', component: GroupsComponent},
  {path: 'groups/:term', component: GroupsComponent},
  {path: 'groupadd', component: GroupAddComponent},
  {path: 'groupdetail/:id', component: GroupDetailComponent},

  {path: 'about', component: AboutComponent},

  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
