import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async (e) => {

	console.log('is it here?', e);
	const { event, resolve,  } = e;
    console.log('hooks-server:', {platform: event.platform});
	const response = await resolve(event);
	return response;
};