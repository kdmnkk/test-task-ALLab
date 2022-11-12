import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<number>();

  currentPage = 1;
  @Input() pageCount = 0;

  next() {
    this.currentPage = this.currentPage + 1;
    this.pageChange.emit(this.currentPage);
  }

  prev() {
    this.currentPage = this.currentPage - 1;
    this.pageChange.emit(this.currentPage);
  }

  toPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
