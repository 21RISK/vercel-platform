import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

    console.log('hooks-server:', {platform: event.platform});
	const response = await resolve(event);
	return response;
};