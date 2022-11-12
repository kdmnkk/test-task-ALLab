import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobBoardComponent } from 'src/app/components/job-board/job-board.component';
import { JobPageComponent } from 'src/app/components/job-page/job-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobBoardComponent,
  },
  {
    path: ':id',
    component: JobPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
