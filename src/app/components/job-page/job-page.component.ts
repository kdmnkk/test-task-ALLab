import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';
import { JobInterface } from 'src/app/core/interfaces/job.interface';
import { JobsStoreService } from 'src/app/core/services/jobs-store.service';

@UntilDestroy()
@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss'],
})
export class JobPageComponent implements OnInit {
  jobID = this.router.url.slice(1);
  job?: JobInterface;

  constructor(private router: Router, private jobsStoreService: JobsStoreService) {}

  ngOnInit() {
    this.jobsStoreService.jobs.pipe(
      map(list => list.filter(item => item.id === this.jobID)),
      untilDestroyed(this),
    ).subscribe(res => this.job = res[0]);
  }

}
