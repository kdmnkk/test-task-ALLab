import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PropertyRectanglesInterface } from 'src/app/core/interfaces/property-rectangle.interface';

@Component({
  selector: 'app-property-rectangles',
  templateUrl: './property-rectangles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyRectanglesComponent {
  @Input() item?: PropertyRectanglesInterface;
}
