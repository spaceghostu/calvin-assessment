import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ContactsModule } from './contacts/contacts.module';
import {
  StoreModule,
  ActionReducerMap,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer as contactsReducer } from './contacts/+state/contacts.reducer';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NxModule } from '@nrwl/angular';
import { storeLogger } from 'ngrx-store-logger';
import { PipesModule } from './pipes/pipes.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return storeLogger()(reducer);
}
export const metaReducers: MetaReducer<any>[] = [debug];

export const reducers: ActionReducerMap<any> = {
  contacts: contactsReducer
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialsModule,
    AppRoutingModule,
    PagesModule,
    NxModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ContactsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
