import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-wrapper',
  templateUrl: './loading-wrapper.component.html',
  styleUrls: ['./loading-wrapper.component.scss']
})

export class LoadingWrapperComponent {
  @Input() loading: boolean;
}
