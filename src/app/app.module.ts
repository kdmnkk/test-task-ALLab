import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/services/token.interceptor';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { JobPageComponent } from 'src/app/components/job-page/job-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    JobBoardComponent,
    JobPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
