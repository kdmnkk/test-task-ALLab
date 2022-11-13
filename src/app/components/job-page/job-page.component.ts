import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { JobsStoreService } from 'src/app/core/services/jobs-store.service';

export interface SectionInterface {
  title: string | null;
  text: string;
}

export interface SplitSectionInterface {
  description: string;
  textString: string;
  titleString?: string;
  beforeTextString?: boolean;
}

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPageComponent {
  jobID = this.router.url.slice(1);
  job$ = this.jobsStoreService.jobs.pipe(
    filter(res => Boolean(res && res.length)),
    map(list => list.find(item => item.id === this.jobID))
  )

  constructor(private router: Router, private jobsStoreService: JobsStoreService) {}

  getSections(description: string): SectionInterface[] {
    return [
      this.splitSection({ description, textString: 'Responsopilities:', beforeTextString: true }),
      this.splitSection({ description, textString: 'Responsopilities:', titleString: 'Responsibilities' }),
      this.splitSection({ description, textString: 'Compensation & Benefits:', titleString: 'Compensation & Benefits:' }),
    ];
  }

  splitSection(options: SplitSectionInterface): SectionInterface {
    return {
      title: options.titleString || null,
      text: options.description.split(options.textString)[Number(!options.beforeTextString)],
    };
  }
}
