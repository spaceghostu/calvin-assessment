import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdcListModule,
  MDCDataTableModule,
  MdcIconModule,
  MdcElevationModule,
  MdcButtonModule,
  MdcLinearProgressModule
} from '@angular-mdc/web';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MdcListModule,
    MDCDataTableModule,
    MdcIconModule,
    MdcElevationModule,
    MdcButtonModule,
    MdcLinearProgressModule,
  ]
})
export class MaterialsModule {}
