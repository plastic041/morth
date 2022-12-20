import type { Product } from 'src/lib/types';
import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const products = (await res.json()) as Product[];

	return {
		products
	};
}) satisfies PageLoad;
