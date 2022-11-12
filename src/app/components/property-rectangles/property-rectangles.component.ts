import { Component, Input } from '@angular/core';

export interface PropertyRectanglesInterface {
  title: string;
  properties: string[];
  color?: string;
}

@Component({
  selector: 'app-property-rectangles',
  templateUrl: './property-rectangles.component.html',
  styleUrls: ['./property-rectangles.component.scss']
})
export class PropertyRectanglesComponent {
  @Input() item?: PropertyRectanglesInterface;
}
