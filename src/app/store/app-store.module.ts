import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/app.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
  ]
})
export class AppStoreModule { }
