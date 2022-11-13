import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobInterface } from 'src/app/core/interfaces/job.interface';
import { JobsStoreService } from 'src/app/core/services/jobs-store.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobBoardComponent {
  jobs$ = this.storeService.jobs;
  currentPage = 1;

  get startIndex(): number {
    if (this.currentPage === 1) return 0;
    return this.currentPage * 10 - 10;
  }

  get endIndex(): number {
    if (this.currentPage === 1) return 9;
    return this.currentPage * 10 - 1;
  }

  constructor(private storeService: JobsStoreService, private scroller: ViewportScroller) {}

  getPagesNumber(jobs: JobInterface[]): number {
    return Math.ceil(jobs.length / 10);
  }

  pageChanged(page: number): void {
    this.currentPage = page;
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}

