import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobInterface } from 'src/app/core/interfaces/job.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobApiService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobInterface[]> {
    return this.http.get<JobInterface[]>(environment.baseURL);
  }
}
