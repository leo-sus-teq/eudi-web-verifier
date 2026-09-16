import { ActionCode } from '@shared/elements/body-actions/models/ActionCode';
import { BodyAction } from '@shared/elements/body-actions/models/BodyAction';

export const HOME_ACTIONS: BodyAction[] = [
	{
		label: 'actions.next',
		id: 'next_button',
		disabled: true,
		mode: 'none',
		color: 'primary',
		order: 1,
		code: ActionCode.NEXT
	}
];
export const SELECTABLE_ACTIONS: BodyAction[] = [
	{
		label: 'actions.next',
		id: 'next_button',
		disabled: false,
		mode: 'none',
		color: 'primary',
		order: 1,
		code: ActionCode.NEXT
	},
	{
		label: 'actions.back',
		id: 'back_button',
		disabled: false,
		mode: 'none',
		color: 'secondary',
		order: 2,
		code: ActionCode.BACK
	},
];
export const BACK_ONLY_ACTIONS: BodyAction[] = [
	{
		label: 'actions.back',
		id: 'back_button',
		disabled: false,
		mode: 'none',
		color: 'secondary',
		order: 2,
		code: ActionCode.BACK
	}
];
export const PRESENTATION_ACTIONS: BodyAction[] = [
	{
		label: 'actions.next',
		id: 'next_button',
		disabled: true,
		mode: 'none',
		color: 'primary',
		order: 1,
		code: ActionCode.NEXT
	},
	{
		label: 'actions.back',
		id: 'back_button',
		disabled: false,
		mode: 'none',
		color: 'secondary',
		order: 2,
		code: ActionCode.BACK
	},
];
