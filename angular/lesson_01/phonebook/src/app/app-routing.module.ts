import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: PersonDetailComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
