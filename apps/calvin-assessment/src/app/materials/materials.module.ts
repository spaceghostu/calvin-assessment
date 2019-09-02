import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdcListModule,
  MDCDataTableModule,
  MdcIconModule,
  MdcElevationModule,
  MdcButtonModule,
  MdcLinearProgressModule,
  MdcCardModule,
  MdcIconButtonModule,
  MdcTypographyModule
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
    MdcCardModule,
    MdcIconButtonModule,
    MdcTypographyModule,
  ]
})
export class MaterialsModule {}
