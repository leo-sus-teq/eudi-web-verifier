import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeOfColor } from './enums/type-of-color';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'vc-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class ButtonComponent {

  constructor(private readonly translate: TranslateService) {}

  @Input() isDisabled = false;
  // An i18n KEY, not literal display text - every caller (see
  // pages-actions.ts, open-logs.component.html) passes a translate key now,
  // resolved here rather than shown as-is.
  @Input() name!: string;
  @Input() color: TypeOfColor = 'primary';
  @Input() set mode (value: string) {
  	if (value === 'loading') {
  		this.buttonName = this.translate.instant('actions.loading');
  	} else {
  		this.buttonName = this.translate.instant(this.name).toUpperCase();
  	}
  }
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  buttonName!: string;
  click () {
  	this.clicked.emit();
  }
}
