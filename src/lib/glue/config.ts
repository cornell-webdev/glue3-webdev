import IconCar from '$lib/icons/glue/IconCar.svelte';
import type { IPrivateNav, IPublicNav } from '$lib/types/glue/nav.type';

export const APP_NAME = 'AppName';
export const PUBLIC_NAVS: IPublicNav[] = [];
export const PRIVATE_NAVS: IPrivateNav[] = [
	{
		path: '/profile/tours',
		label: 'My Tours',
		icon: IconCar
	}
];
export const IS_ENFORCE_CORNELL_EMAIL = false;
export const IS_BETA = true;
export const SENTRY_DSN_PUBLIC = '';

// used in terms and conditions
export const ADMIN_EMAIL = 'referhub.team@gmail.com';
export const PROD_DOMAIN = 'https://www.referhub.org';
