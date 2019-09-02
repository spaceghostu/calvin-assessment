import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialsModule } from '../materials/materials.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [ContactsComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    AppRoutingModule,
    PipesModule,
  ]
})
export class PagesModule { }
