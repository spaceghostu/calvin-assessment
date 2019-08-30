import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class PagesModule { }
