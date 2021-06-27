import headers from './headers';

const response = (res: any) => {
	if (res.ok) {
		return res.json();
	} else if (res.status >= 500) {
		throw new Error();
	} else if (res.status >= 400 && res.status < 500) {
		res.json().then((json: any) => json.message);
	}
};

export const get = (path: string) => {
	return fetch(path, {
		method: 'GET',
		headers: headers()
	}).then((res: any) => response(res));
};