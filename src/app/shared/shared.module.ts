import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './elements/editor/editor.component';
import { ButtonComponent } from './elements/button/button.component';
import { BodyActionsComponent } from './elements/body-actions/body-actions.component';
import { OrderByPipe } from './elements/pipes/order-by.pipe';
import { BodyActionsService } from './elements/body-actions/body-actions.service';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@NgModule({
	declarations: [
		EditorComponent,
		ButtonComponent,
		BodyActionsComponent,
		OrderByPipe
	],
	imports: [
		CommonModule,
		// Both standalone (see ngx-translate v18's NgModule-removal - a
		// standalone pipe/directive is imported into a consuming NgModule
		// the same way a standalone component would be), re-exported below
		// so every one of this app's ~17 existing SharedModule consumers
		// gets `| translate`/`[translate]` for free instead of each
		// needing its own separate import.
		TranslatePipe,
		TranslateDirective,
	],
	exports: [
		EditorComponent,
		ButtonComponent,
		BodyActionsComponent,
		OrderByPipe,
		TranslatePipe,
		TranslateDirective,
	],
	providers: [
		BodyActionsService
	]
})
export class SharedModule { }
