import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobBoardComponent } from 'src/app/components/job-board/job-board.component';
import { JobPageComponent } from 'src/app/components/job-page/job-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobBoardComponent,
    children: [
      { path: ':id', component: JobPageComponent }
    ]
  },
  { path: '**', component: JobBoardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
