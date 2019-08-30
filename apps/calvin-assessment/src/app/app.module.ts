import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
