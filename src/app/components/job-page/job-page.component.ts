import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobPageComponent {}
