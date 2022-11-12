import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { delay } from 'rxjs';
import { JobInterface } from 'src/app/core/interfaces/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent implements OnInit {
  @Input() job?: JobInterface;
  @Input() index = 0;

  location = '-';

  constructor(private geocoder: MapGeocoder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.job) {
      this.geocoder.geocode({
        location: {
          lat: +this.job?.location.lat,
          lng: +this.job?.location.long,
        },
      }).pipe(delay(this.index * 1000)).subscribe(({ results }) => {
        this.location = results.length ? results[0].formatted_address : 'New York';
        this.cdr.detectChanges();
      });
    }
  }
}
