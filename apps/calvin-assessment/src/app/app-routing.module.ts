import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'contact/new',
    component: AddContactComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
