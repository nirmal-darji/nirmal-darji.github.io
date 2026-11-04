import type { ImageMetadata } from 'astro';
import reddit from '../assets/companies/reddit.svg';
import doordash from '../assets/companies/doordash.svg';
import quora from '../assets/companies/quora.svg';

export interface Company {
	name: string;
	logo?: ImageMetadata;
}

export const companies: Company[] = [
	{ name: 'Reddit', logo: reddit },
	{ name: 'Xapo Bank' },
	{ name: 'DoorDash', logo: doordash },
	{ name: 'IFTTT' },
	{ name: 'Brightwheel' },
	{ name: 'Scoop' },
	{ name: 'TextNow' },
	{ name: 'Quora', logo: quora },
	{ name: 'powerCloud' },
	{ name: '1KOMMA5°' },
];
