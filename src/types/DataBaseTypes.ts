export const DBLink = 'https://react-learnwords-example.herokuapp.com/';

export type Options = {
	[key: string]: string
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type GetHandler = [(data?: any) => void, (<U>(data?: U) => void)?]