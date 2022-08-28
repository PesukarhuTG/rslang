import CreateUrl from './createUrl';
import { Options } from './createUrl';

const getData = async (endpoint: string, options?: Options) => {
  const fullUrl = CreateUrl(endpoint, options);
  const response: Response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`${response.status}  - ${response.statusText}`);
  } else {
    return response.json();
  }
};
export default getData;
