import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobsStoreService } from 'src/app/core/services/jobs-store.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobBoardComponent {
  jobs$ = this.storeService.jobs;

  constructor(private storeService: JobsStoreService) {}
}

