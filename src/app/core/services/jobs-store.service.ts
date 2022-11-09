import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JobApiService } from 'src/app/core/api/job.api.service';
import { JobInterface } from 'src/app/core/interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class JobsStoreService {
  private _jobs = new BehaviorSubject<JobInterface[]>([]);

  constructor(private jobApiService: JobApiService) {
    this.loadInitialData();
  }

  get jobs() {
    return this._jobs.asObservable();
  }

  loadInitialData() {
    this.jobApiService.getJobs()
      .subscribe(
        res => this._jobs.next(res),
        err => console.log(err),
      );
  }
}
