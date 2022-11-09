import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppStoreModule } from 'src/app/store/app-store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
