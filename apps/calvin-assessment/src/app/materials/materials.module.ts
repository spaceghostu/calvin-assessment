import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdcListModule,
  MDCDataTableModule,
  MdcIconModule,
  MdcElevationModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MdcListModule,
    MDCDataTableModule,
    MdcIconModule,
    MdcElevationModule
  ]
})
export class MaterialsModule {}
