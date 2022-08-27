import CreateUrl from './createUrl';
import { Options } from './createUrl';

type GetHandler = [(data?: unknown) => void, ((data?: unknown) => void)?];

const getData = async (endpoint: string, handlers: GetHandler, options?: Options) => {
	const [
		callback,
		errorHandler = () => {
		},
	] = handlers;
	const fullUrl = CreateUrl(endpoint, options);
	const response: Response = await fetch(fullUrl);
	if (!response.ok) {
		errorHandler();
	} else callback(await response.json());
};
export default getData;

