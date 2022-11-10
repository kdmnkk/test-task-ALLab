import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobInterface } from 'src/app/core/interfaces/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  @Input() job?: JobInterface;
}
