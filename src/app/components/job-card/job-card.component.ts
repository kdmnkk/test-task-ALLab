import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MapGeocoder } from '@angular/google-maps';
import { JobInterface } from 'src/app/core/interfaces/job.interface';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent implements OnInit {
  @Input() job?: JobInterface;

  location = '-';

  constructor(private geocoder: MapGeocoder, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.job) {
      this.geocoder.geocode({
        location: {
          lat: this.job?.location.lat ? this.job?.location.lat : 40.714224,
          lng: this.job?.location.long ? this.job?.location.long : -73.961452,
        },
      }).subscribe(({ results }) => {
        this.location = results.length ? results[0].formatted_address : '-';
      });
      this.cdr.detectChanges();
    }
  }
}
