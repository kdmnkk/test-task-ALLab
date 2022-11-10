import { Component } from '@angular/core';
import { JobsStoreService } from 'src/app/core/services/jobs-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task-ALLab';

  constructor(private jobsStoreService:JobsStoreService) {
    console.log(this.jobsStoreService.jobs);
  }
}
