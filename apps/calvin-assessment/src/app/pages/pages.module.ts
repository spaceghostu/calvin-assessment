import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialsModule } from '../materials/materials.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';



@NgModule({
  declarations: [ContactsComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class PagesModule { }
