import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/services/token.interceptor';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobBoardComponent } from './components/job-board/job-board.component';
import { JobPageComponent } from 'src/app/components/job-page/job-page.component';
import { PropertyRectanglesComponent } from './components/property-rectangles/property-rectangles.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadComponent } from './components/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    JobBoardComponent,
    JobPageComponent,
    PropertyRectanglesComponent,
    PaginationComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
