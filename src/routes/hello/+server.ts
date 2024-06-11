
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {

    console.log('is platform here?', event.platform)
    return json({ message: 'GET request to the homepage' });
}