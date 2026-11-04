import type { ImageMetadata } from 'astro';
import claudia from '../assets/recommendations/claudia-burkhardt.png';
import stefan from '../assets/recommendations/stefan-weller.png';
import amir from '../assets/recommendations/amir-bekheat.png';
import samira from '../assets/recommendations/samira-uzcategui.png';
import joao from '../assets/recommendations/joao-lorencetti.png';
import ariel from '../assets/recommendations/ariel-stilman.png';
import anjali from '../assets/recommendations/anjali-patel.png';
import christian from '../assets/recommendations/christian-mierez.png';
import harsh from '../assets/recommendations/harsh-chhabra.png';
import gunja from '../assets/recommendations/gunja-shah.png';
import anurag from '../assets/recommendations/anurag-maheshwari.png';
import ronaldo from '../assets/recommendations/ronaldo-duarte.png';

export interface Recommendation {
	name: string;
	image: ImageMetadata;
	alt: string;
}

/** Newest first. The image is the LinkedIn recommendation itself. */
export const recommendations: Recommendation[] = [
	{
		name: 'Claudia Burkhardt',
		image: claudia,
		alt: 'LinkedIn recommendation from Claudia Burkhardt, September 2024, a colleague on the same team.',
	},
	{
		name: 'Stefan Weller',
		image: stefan,
		alt: 'LinkedIn recommendation from Stefan Weller, Lead QA Engineer, who managed Nirmal at powerCloud. September 2024.',
	},
	{
		name: 'Amir Bekheat',
		image: amir,
		alt: 'LinkedIn recommendation from Amir Bekheat, Software Developer, a colleague on the same team. June 2024.',
	},
	{
		name: 'Samira Uzcategui',
		image: samira,
		alt: 'LinkedIn recommendation from Samira Uzcategui, QA Lead and Coach, a colleague on the same team. February 2024.',
	},
	{
		name: 'João Luiz Lorencetti',
		image: joao,
		alt: 'LinkedIn recommendation from João Luiz Lorencetti, Senior Backend Engineer at Xapo, a colleague on the same team. February 2024.',
	},
	{
		name: 'Ariel Stilman',
		image: ariel,
		alt: 'LinkedIn recommendation from Ariel Stilman, Quality Engineering Leader, who led Nirmal at Xapo Bank. February 2024.',
	},
	{
		name: 'Anjali Patel',
		image: anjali,
		alt: 'LinkedIn recommendation from Anjali Patel, who reported to Nirmal at Lodestone Software Services. January 2024.',
	},
	{
		name: 'Christian Mierez',
		image: christian,
		alt: 'LinkedIn recommendation from Christian Mierez, Quality Engineering Leader and a client. January 2024.',
	},
	{
		name: 'Harsh Chhabra',
		image: harsh,
		alt: 'LinkedIn recommendation from Harsh Chhabra, who worked with Nirmal at Roposo. January 2024.',
	},
	{
		name: 'Gunja Shah',
		image: gunja,
		alt: 'LinkedIn recommendation from Gunja Shah, Senior QA Engineer at Thomson Reuters. December 2023.',
	},
	{
		name: 'Anurag Maheshwari',
		image: anurag,
		alt: 'LinkedIn recommendation from Anurag Maheshwari, Software Engineer in Test and a client. December 2023.',
	},
	{
		name: 'Ronaldo Duarte',
		image: ronaldo,
		alt: 'LinkedIn recommendation from Ronaldo Duarte, Software Engineer, a colleague on the same team at Xapo. December 2023.',
	},
];
