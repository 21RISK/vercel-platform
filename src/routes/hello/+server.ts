
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {


    console.log('is platform here?', event.platform); // Why is event.platform undefined here?
    return json({ message: 'GET request to the homepage', platformDefined: !!event.platform });
}