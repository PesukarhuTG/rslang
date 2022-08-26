import { DBLink, Options } from "../types/DataBaseTypes"


const CreateUrl = (endpoint: string, options?: Options): string => {
	let querryUrl: string = '';
	if (options) {
		const querryKeys: string[] = Object.keys(options);
		querryUrl = '?' + querryKeys.map(key => `${key}=${options[key]}`).join('&');
	}
	const fullUrl: string = `${DBLink}${endpoint}${querryUrl}`;
	return fullUrl
};

export default CreateUrl