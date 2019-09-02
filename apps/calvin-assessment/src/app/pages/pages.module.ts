import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialsModule } from '../materials/materials.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { AddContactComponent } from './add-contact/add-contact.component';



@NgModule({
  declarations: [ContactsComponent, ContactDetailComponent, AddContactComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    AppRoutingModule,
    PipesModule,
  ]
})
export class PagesModule { }
